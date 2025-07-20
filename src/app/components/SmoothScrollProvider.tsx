"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

interface SmoothScrollProviderProps {
	children: React.ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
	const lenisRef = useRef<Lenis | null>(null);

	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			wheelMultiplier: 1,
			touchMultiplier: 2,
			infinite: false,
		});
		lenisRef.current = lenis;
		(window as typeof window & { lenis: Lenis }).lenis = lenis;
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
		return () => {
			lenis.destroy();
			lenisRef.current = null;
		};
	}, []);
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.history.scrollRestoration = "manual";
		}
	}, []);
	return <div>{children}</div>;
}

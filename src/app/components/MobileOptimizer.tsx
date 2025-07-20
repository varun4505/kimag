"use client";
import { useMobile } from "../../hooks/useMobile";
import { useEffect } from "react";

type MobileBodyStyle = CSSStyleDeclaration & {
	webkitOverflowScrolling?: string;
	webkitTapHighlightColor?: string;
};

export default function MobileOptimizer({ children }: { children: React.ReactNode }) {
	const { isMobile } = useMobile();

	useEffect(() => {
		if (isMobile) {
			// Add mobile-specific optimizations
			const bodyStyle = document.body.style as MobileBodyStyle;
			bodyStyle.webkitOverflowScrolling = 'touch';
			bodyStyle.webkitTapHighlightColor = 'transparent';
			document.addEventListener('touchstart', function() {}, { passive: true });
			document.addEventListener('touchmove', function() {}, { passive: true });
		}
		return () => {
			if (isMobile) {
				const bodyStyle = document.body.style as MobileBodyStyle;
				bodyStyle.webkitOverflowScrolling = '';
				bodyStyle.webkitTapHighlightColor = '';
			}
		};
	}, [isMobile]);

	return <>{children}</>;
}

'use client';
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', startTime: '', endTime: '', approver: '' });

  const submit = async () => {
    await fetch('/api/appointments/new', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    });
    alert('Request sent!');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Book Appointment</h2>
      <input placeholder="Name" className="border p-2 w-full" onChange={e => setForm(f => ({ ...f, name: e.target.value }))} /><br />
      <input placeholder="Email" className="border p-2 w-full" onChange={e => setForm(f => ({ ...f, email: e.target.value }))} /><br />
      <input type="datetime-local" className="border p-2 w-full" onChange={e => setForm(f => ({ ...f, startTime: e.target.value }))} /><br />
      <input type="datetime-local" className="border p-2 w-full" onChange={e => setForm(f => ({ ...f, endTime: e.target.value }))} /><br />
      <select className="border p-2 w-full" onChange={e => setForm(f => ({ ...f, approver: e.target.value }))}>
        <option value="">Select Approver</option>
        <option value={process.env.NEXT_PUBLIC_APPROVER1}>Approver 1</option>
        <option value={process.env.NEXT_PUBLIC_APPROVER2}>Approver 2</option>
      </select>
      <button onClick={submit} className="mt-2 bg-blue-500 text-white p-2 rounded">Submit</button>
    </div>
  );
}
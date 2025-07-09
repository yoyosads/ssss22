"use client";
import { useRouter } from "next/navigation";

export default function SeatAllotment() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="w-full max-w-lg space-y-4">
        <div className="text-base font-semibold">Candidate Name:- VIMARSH SINGH</div>
        <div className="text-base font-semibold">Admission Number:- 25010888</div>
        <div className="mt-6 py-4 px-2 rounded border border-blue-500 bg-blue-50">
          <div className="font-semibold text-blue-700 text-lg">Seat Alloted:- BITS Pilani, Hyderabad Campus</div>
          <div className="font-semibold text-blue-700 text-lg">Branch Offered:- B.E. (Electronics and Communication)</div>
        </div>
        <div className="flex flex-row gap-4 mt-8 w-full justify-between">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded text-sm w-1/2 mr-2"
            style={{ border: 'none' }}
          >
            Pay INR 3.3 lakhs to participate further
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded text-sm w-1/2 ml-2"
            style={{ border: 'none' }}
            onClick={() => router.push('/counselling-cancelled')}
          >
            Cancel Counselling
          </button>
        </div>
      </div>
    </main>
  );
}

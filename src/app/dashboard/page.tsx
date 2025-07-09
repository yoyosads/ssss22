"use client";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1
        className="text-2xl font-bold mb-8"
        style={{ color: "#d32f2f", borderBottom: "3px solid #1976d2", display: "inline-block", paddingBottom: 4 }}
      >
        BITSAT 2025 ITERATION 1
      </h1>
      <div className="w-full max-w-lg">
        <table className="w-full border mb-6">
          <tbody>
            <tr className="border-b"><td className="font-semibold pr-2">Candidate Name:</td><td>VIMARSH SINGH</td></tr>
            <tr className="border-b"><td className="font-semibold pr-2">Admission Number:</td><td>25010888</td></tr>
            <tr className="border-b"><td className="font-semibold pr-2">Session 1 Score:</td><td>282</td></tr>
            <tr><td className="font-semibold pr-2">Session 2 Score:</td><td>285</td></tr>
          </tbody>
        </table>
        <div className="mb-4">
          Based on the scores above and your preferences in your PREFERENCE FORM, you've been alloted the following seat:-
        </div>
        <button onClick={() => router.push("/seat-allotment")}
          className="text-red-600 underline font-medium text-lg focus:outline-none p-0 m-0 bg-transparent hover:text-red-800"
          style={{ color: "#d32f2f", textDecorationColor: "#1976d2", textDecorationLine: "underline" }}
        >
          Click Here
        </button>
      </div>
    </main>
  );
}
// ... existing code ... <rest of file, if any> ...

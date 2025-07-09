"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Home() {
  const router = useRouter();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginId && password) {
      router.push("/dashboard");
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1
        className="text-2xl font-bold mb-8"
        style={{ color: "#d32f2f", borderBottom: "3px solid #1976d2", display: "inline-block", paddingBottom: 4 }}
      >
        BITSAT COUNSELLING ITERATION - 1 SEAT ALLOTMENT
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col max-w-md w-full gap-6 bg-white p-8 rounded shadow">
        <div className="flex flex-col gap-2">
          <Label htmlFor="loginId">Login ID</Label>
          <Input
            id="loginId"
            type="text"
            value={loginId}
            onChange={e => setLoginId(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <Button
          type="submit"
          style={{ backgroundColor: '#388e3c', color: "#fff" }}
          className="mt-4 hover:bg-green-700"
        >
          Submit
        </Button>
      </form>
    </main>
  );
}

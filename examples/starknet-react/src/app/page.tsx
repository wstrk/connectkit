"use client";
import WalletBar from "@/components/WalletBar";
import { ConnectKitButton, ConnectKitProvider } from "connectkit";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-12">
      <WalletBar />
      <ConnectKitProvider>
        <ConnectKitButton />
      </ConnectKitProvider>
    </main>
  );
}

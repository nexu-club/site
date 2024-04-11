"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";

import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";
import { formatAddress } from "../lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/com/ui/popover";

export const LogButton = () => {
  const { sdk, connected, connecting, account } = useSDK();

  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };

  const disconnect = () => {
    if (sdk) {
      sdk.terminate();
    }
  };

  return (
    <div className="relative">
      {connected ? (
        <Popover>
            <PopoverTrigger>
              <Link href="/uni"><Button><Image src="/logd.svg" height={36} width={36} alt="logd"></Image></Button></Link>
            </PopoverTrigger>
        </Popover>
      ) : (
        <Button disabled={connecting}>
          <div>
            <Link href="/login"><Image src="/login.svg" height={36} width={36} alt="nexu-login" className="mx-auto" /></Link>
          </div>
        </Button>
      )}
    </div>
  );
};
'use client';
import { logoFont } from '@/app/fonts/fonts';
import React from 'react';
import { useRouter } from 'next/navigation';

function AppName() {
  return <div className={`${logoFont.className} text-4xl`}>Passwordy</div>;
}

function DemoSticker() {
  return (
    <div className="text-s absolute left-0 top-24 ml-2 origin-top-left -rotate-45 transform rounded-sm bg-red-500 px-10 py-1 font-bold text-white">
      Demo
    </div>
  );
}

export default function Home() {
  const [password, setPassword] = React.useState('');
  const router = useRouter();
  const passwordMinLength = 8;
  const passwordMaxLength = 100;
  const isValidPassword =
    password.length > passwordMinLength && password.length < passwordMaxLength;

  const processPassword = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
  }, []);

  const verifyPassword = () => {
    // TODO: Implement password verification
    router.replace('/dashboard');
  };

  return (
    <div className="relative flex min-h-screen flex-col">
      <DemoSticker />
      <header className="p-4 text-right">Logout</header>
      <main className="flex flex-grow flex-col items-center justify-center gap-14">
        <div className="flex flex-col items-center italic">
          <AppName />
          <div>Passwords and secrets manager</div>
        </div>
        <div className={'flex flex-col gap-4'}>
          <input
            type="password"
            placeholder={'Password ...'}
            aria-label="Enter your password"
            value={password}
            onChange={processPassword}
            className="w-72 border-2 border-red-500 bg-transparent py-2 pl-2 tracking-[0.2rem]"
            minLength={passwordMinLength}
            maxLength={passwordMaxLength}
          />
          <button
            aria-label="Submit password"
            onClick={verifyPassword}
            className={`self-end ${isValidPassword ? 'underline' : 'cursor-not-allowed opacity-50'}`}
            disabled={!isValidPassword}
          >
            Submit
          </button>
        </div>
      </main>
      <footer className="p-4 text-right">Passwordy by Sitra</footer>
    </div>
  );
}

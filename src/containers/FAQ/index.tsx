import { FAQAccordion, Header } from '@/components';

export const FAQPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 flex-col items-center justify-center">
        <span className="text-5xl font-bold leading-[48px]">
          Frequently Asked Question
        </span>

        <FAQAccordion />
      </div>
    </div>
  );
};

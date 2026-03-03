'use client';

import { useState, useRef, useCallback, useId } from 'react';
import { CaretDownIcon } from '@phosphor-icons/react';
import { faq } from '../../../content/homepage';
import { Section, SectionHeader } from '@/components/ui';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  onNavigate: (direction: 'prev' | 'next') => void;
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
  onNavigate,
}: AccordionItemProps) {
  const baseId = useId();
  const triggerId = `${baseId}-trigger-${index}`;
  const panelId = `${baseId}-panel-${index}`;
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        onNavigate('next');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        onNavigate('prev');
      }
    },
    [onNavigate]
  );

  return (
    <div className="border-b border-neutral-200">
      <h3>
        <button
          ref={buttonRef}
          id={triggerId}
          type="button"
          role="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          onKeyDown={handleKeyDown}
          className={cn(
            'flex w-full items-center justify-between py-4 text-left',
            'font-heading text-lg font-semibold text-indigo-500',
            'transition-colors duration-[200ms] ease-[var(--ease-default)]',
            'hover:text-indigo-500',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
            'cursor-pointer'
          )}
        >
          <span className="pr-4">{question}</span>
          <span
            className={cn(
              'shrink-0 transition-transform duration-[350ms] ease-[var(--ease-default)]',
              isOpen && 'rotate-180'
            )}
            aria-hidden="true"
          >
            <CaretDownIcon size={20} weight="light" className="text-indigo-500" />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={cn(
          'grid transition-[grid-template-rows] duration-[350ms] ease-[var(--ease-default)]',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden">
          <div
            className={cn(
              'pb-4 font-body text-base text-neutral-600 leading-relaxed',
              'transition-opacity duration-[200ms] ease-[var(--ease-default)]',
              isOpen ? 'opacity-100' : 'opacity-0'
            )}
          >
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  const handleNavigate = useCallback(
    (currentIndex: number, direction: 'prev' | 'next') => {
      const totalItems = faq.items.length;
      let nextIndex: number;

      if (direction === 'next') {
        nextIndex = (currentIndex + 1) % totalItems;
      } else {
        nextIndex = (currentIndex - 1 + totalItems) % totalItems;
      }

      itemRefs.current[nextIndex]?.focus();
    },
    []
  );

  return (
    <Section background="warmWhite">
      <SectionHeader
        title={faq.sectionTitle}
        subtitle={faq.sectionSubtitle}
        decorative
      />

      <div className="mx-auto max-w-[720px]">
        {faq.items.map((item, index) => (
          <AccordionItem
            key={`faq-${index}`}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
            index={index}
            onNavigate={(direction) => handleNavigate(index, direction)}
          />
        ))}
      </div>
    </Section>
  );
}

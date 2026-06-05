import React from "react";
import { cn } from "@/lib/utils";

export interface TabConfig<T extends string> {
  id: T;
  label: string;
}

interface TabContainerProps<T extends string> {
  tabs: TabConfig<T>[];
  activeTab: T;
  onTabChange: (nextTab: T) => void;
  renderContent: (activeTab: T) => React.ReactNode;
  sticky?: boolean;
  className?: string;
}

export function TabContainer<T extends string>({
  tabs,
  activeTab,
  onTabChange,
  renderContent,
  sticky = false,
  className,
}: TabContainerProps<T>) {
  return (
    <div className={cn(sticky ? "sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm" : "", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto gap-0 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex-shrink-0 px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors",
                activeTab === tab.id
                  ? "border-gold text-gold"
                  : "border-transparent text-gray-500 hover:text-navy"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{renderContent(activeTab)}</div>
    </div>
  );
}

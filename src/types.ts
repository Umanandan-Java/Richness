/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Faculty {
  id: string;
  name: string;
  icon: string; // Lucide icon name string
  description: string;
  dean: string;
  deanQuote: string;
  departments: Department[];
}

export interface Department {
  id: string;
  name: string;
  description: string;
  degrees: string[];
  eligibility: string;
  durationYears: number;
  tuitionPerYearINR: number;
  careerPath: string[];
}

export interface ResearchPublication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  tags: string[];
  departmentId: string;
  significance: string;
}

export interface UniversityLeader {
  role: string;
  name: string;
  quote: string;
  message: string;
  photoUrl: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  tag?: string;
}

export interface CampusFacility {
  id: string;
  name: string;
  category: "Academic" | "Residential" | "Athletics" | "Culture";
  description: string;
  imageUrl: string;
  features: string[];
}

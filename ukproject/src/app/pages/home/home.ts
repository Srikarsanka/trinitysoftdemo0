import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProblemItem {
  number: string;
  title: string;
  matter: string;
}

@Component({
  imports: [CommonModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  // null means all are collapsed by default
  activeProblemIndex: number | null = null;

  problems: ProblemItem[] = [
    {
      number: '01',
      title: 'Losing track of stocks & orders',
      matter: 'Live Inventory and a Sales & CRM that runs enquiry to invoice, so stock and orders always match.',
    },
    {
      number: '02',
      title: 'Chasing late payments',
      matter: 'Finance with AI Credit control that chases late payers for you, plan OPen Banking and visible cash flow.',
    },
    {
      number: '03',
      title: 'Systems that dont talk to each other',
      matter: 'Integration across ERP,CRM,eCommerce and the rest , so you stop re-keying data.'
    },
    {
      number: '04',
      title: 'Stack on a legacy system that\'s holding you back',
      matter: 'We modernise ageing systems, or rebuild around them , without the big-bang risk.'
    },
    {
      number: '05',
      title: 'Too much manual work eating into your team\'s day',
      matter: 'Process automation , with AI woven in , to take repetitive work off your team.'
    },
    {
      number: '06',
      title: 'Can\'t see the numbers when you need them',
      matter: 'Reporting inside every module , plus abalytics and BI that turn your data into decisions.'
    },
    {
      number: '07',
      title: 'Need software built specifically for how you operate',
      matter: 'Custom software and product engineering, shaped to your exact process.'
    },
    {
      number: '08',
      title: 'Something else- tell us what it is',
      matter: 'Tell us what\'s slowing down and we\'ll point you to the right fix.'
    }
  ];

  // Click to toggle expand/collapse
  toggleProblem(index: number): void {
    this.activeProblemIndex = this.activeProblemIndex === index ? null : index;
  }

  // Hover to reveal matter
  onHover(index: number): void {
    this.activeProblemIndex = index;
  }

  // Optional: reset when mouse leaves section or row
  onLeave(): void {
    // uncomment the line below if you want it to auto-collapse when mouse leaves:
    // this.activeProblemIndex = null;
  }
}

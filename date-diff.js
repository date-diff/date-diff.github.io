/**
 * <date-diff> Web Component
 * Displays the difference between two dates in years or days
 * 
 * Attributes:
 * - from: Start date (defaults to today)
 * - to: End date (defaults to today)
 * - years: If present, display difference in years
 * - days: If present, display difference in days (default)
 */
class DateDiff extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['from', 'to', 'years', 'days'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const fromDate = this.getDate('from');
    const toDate = this.getDate('to');
    const useYears = this.hasAttribute('years');
    const useDays = this.hasAttribute('days') || !useYears; // Default to days

    const diff = this.calculateDifference(fromDate, toDate, useYears);
    const unit = useYears ? (Math.abs(diff) === 1 ? 'year' : 'years') : (Math.abs(diff) === 1 ? 'day' : 'days');
    
    this.innerHTML = `${diff} ${unit}`;
  }

  getDate(attribute) {
    const dateStr = this.getAttribute(attribute);
    if (dateStr) {
      const date = new Date(dateStr);
      // Check if date is valid
      if (!isNaN(date.getTime())) {
        return date;
      }
    }
    // Default to today's date
    return new Date();
  }

  calculateDifference(fromDate, toDate, useYears) {
    if (useYears) {
      return this.calculateYearsDifference(fromDate, toDate);
    } else {
      return this.calculateDaysDifference(fromDate, toDate);
    }
  }

  calculateDaysDifference(fromDate, toDate) {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
    const diffTime = toDate - fromDate;
    const diffDays = Math.round(diffTime / oneDay);
    return diffDays;
  }

  calculateYearsDifference(fromDate, toDate) {
    let years = toDate.getFullYear() - fromDate.getFullYear();
    
    // Adjust if the end date hasn't reached the anniversary yet
    const monthDiff = toDate.getMonth() - fromDate.getMonth();
    const dayDiff = toDate.getDate() - fromDate.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      years--;
    }
    
    return years;
  }
}

// Register the custom element
customElements.define('date-diff', DateDiff);




export function getDataRelatedArticles(section){
  const relatedArticlesMap = {
    "Quick Start": [
      {
        title: "System Requirements",
        content:
          "Technical requirements for running HealthTech Pro including browser compatibility, internet connection, and device specifications.",
        href: "#system-requirements",
      },
      {
        title: "Installation Process",
        content:
          "Step-by-step installation guide for setting up HealthTech Pro in your healthcare facility.",
        href: "#installation",
      },
      {
        title: "Account Setup",
        content:
          "Create and configure user accounts, set up profiles, and manage user preferences and settings.",
        href: "#account-setup",
      },
    ],
    "System Requirements": [
      {
        title: "Quick Start Guide",
        content:
          "Get started with HealthTech Pro quickly. Learn the basics of patient management, appointment scheduling, and system navigation.",
        href: "#quick-start",
      },
      {
        title: "Installation Process",
        content:
          "Step-by-step installation guide for setting up HealthTech Pro in your healthcare facility.",
        href: "#installation",
      },
    ],
    "Installation Process": [
      {
        title: "Quick Start Guide",
        content:
          "Get started with HealthTech Pro quickly. Learn the basics of patient management, appointment scheduling, and system navigation.",
        href: "#quick-start",
      },
      {
        title: "System Requirements",
        content:
          "Technical requirements for running HealthTech Pro including browser compatibility, internet connection, and device specifications.",
        href: "#system-requirements",
      },
      {
        title: "User Roles & Permissions",
        content:
          "Configure different user types including doctors, nurses, administrators, and front desk staff with appropriate access levels.",
        href: "#user-roles",
      },
    ],
    "User Roles & Permissions": [
      {
        title: "Account Setup",
        content:
          "Create and configure user accounts, set up profiles, and manage user preferences and settings.",
        href: "#account-setup",
      },
      {
        title: "Password Management",
        content:
          "Security guidelines for password creation, reset procedures, and multi-factor authentication setup.",
        href: "#password-management",
      },
    ],
    "Account Setup": [
      {
        title: "User Roles & Permissions",
        content:
          "Configure different user types including doctors, nurses, administrators, and front desk staff with appropriate access levels.",
        href: "#user-roles",
      },
      {
        title: "Password Management",
        content:
          "Security guidelines for password creation, reset procedures, and multi-factor authentication setup.",
        href: "#password-management",
      },
    ],
  };
  return relatedArticlesMap[section] || []
}

export function getDataArticle(section){
  const articles = {
    "Quick Start": {
      pagination: { prev: "#quick-start", next: "#system-requirements" },
      template: getArticlesTemplate(section),
    },
  };

  const defaultArticle = {
    pagination:{prev: '#'},
    template: getArticlesTemplate(section)
  }
  return articles[section] || defaultArticle
}


export function generateSearchContent(title) {
    const contentMap = {
      "Quick Start Guide":
        "Get started with HealthTech Pro quickly. Learn the basics of patient management, appointment scheduling, and system navigation.",
      "System Requirements":
        "Technical requirements for running HealthTech Pro including browser compatibility, internet connection, and device specifications.",
      "Installation Process":
        "Step-by-step installation guide for setting up HealthTech Pro in your healthcare facility.",
      "User Roles & Permissions":
        "Configure different user types including doctors, nurses, administrators, and front desk staff with appropriate access levels.",
      "Account Setup":
        "Create and configure user accounts, set up profiles, and manage user preferences and settings.",
      "Password Management":
        "Security guidelines for password creation, reset procedures, and multi-factor authentication setup.",
      "Creating Patient Records":
        "How to create new patient records, input medical history, and manage patient information securely.",
      "Updating Records":
        "Edit existing patient records, add new medical information, and maintain accurate patient data.",
      "Searching Records":
        "Use advanced search features to quickly find patient records using various criteria and filters.",
      "Data Privacy & HIPAA":
        "Understand HIPAA compliance requirements and how patient data is protected in HealthTech Pro.",
      "Scheduling Appointments":
        "Book new appointments, manage calendar views, and coordinate with multiple healthcare providers.",
      "Rescheduling & Cancellations":
        "Modify existing appointments, handle cancellations, and manage waitlists effectively.",
      "Appointment Reminders":
        "Set up automated reminders via email, SMS, and phone calls for patients and staff.",
      "Insurance Verification":
        "Verify patient insurance coverage, check benefits, and process pre-authorizations.",
      "Billing Codes":
        "Use CPT and ICD codes correctly for accurate billing and insurance claims processing.",
      "Payment Processing":
        "Handle patient payments, insurance claims, and manage billing workflows efficiently.",
      "Common Issues":
        "Troubleshoot frequently encountered problems and find quick solutions to common user issues.",
      "Error Codes":
        "Understand system error messages and learn how to resolve technical issues.",
      "Contact Support":
        "Get help from our technical support team through various channels including phone, email, and chat.",
    };

    return contentMap[title];
  }


function getArticlesTemplate(section){
  const templates = {
    "Quick Start": `
                  <header class="article-header">
                    <h1>Welcome to HealthTech Pro Documentation loaded from data.js</h1>
                    <p class="article-subtitle">Comprehensive guide for healthcare professionals</p>
                    <div class="article-meta">
                        <span class="tag">Getting Started</span>
                        <span class="tag">Overview</span>
                        <span class="last-updated">Last updated: January 9, 2025</span>
                    </div>
                  </header>

                  <div class="article-content">
                    <section class="content-section">
                        <h2>Quick Start Guide</h2>
                        <p>HealthTech Pro is designed to streamline healthcare workflows for medical professionals. This documentation will help you get started quickly and efficiently.</p>
                        
                        <div class="info-card">
                            <div class="info-card-header">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9a1 1 0 112 0v4a1 1 0 11-2 0V9zM10 5a1 1 0 100 2 1 1 0 000-2z" fill="#84cc16"/>
                                </svg>
                                <h3>Important Note</h3>
                            </div>
                            <p>All patient data is encrypted and HIPAA compliant. Please ensure you follow your organization's data handling policies.</p>
                        </div>

                        <h3>Key Features</h3>
                        <ul class="feature-list">
                            <li>
                                <strong>Patient Management:</strong> Comprehensive patient record system with search and filtering capabilities
                            </li>
                            <li>
                                <strong>Appointment Scheduling:</strong> Integrated calendar system with automated reminders
                            </li>
                            <li>
                                <strong>Billing Integration:</strong> Streamlined billing with insurance verification
                            </li>
                            <li>
                                <strong>Reporting:</strong> Generate detailed reports for practice management
                            </li>
                        </ul>

                        <h3>Getting Started Steps</h3>
                        <ol class="step-list">
                            <li>
                                <strong>Account Setup:</strong> Create your user account and configure your profile
                            </li>
                            <li>
                                <strong>System Configuration:</strong> Set up your practice settings and preferences
                            </li>
                            <li>
                                <strong>User Training:</strong> Complete the onboarding modules for your role
                            </li>
                            <li>
                                <strong>Data Migration:</strong> Import existing patient data (if applicable)
                            </li>
                        </ol>
                    </section>
                    </div>

                    <section class="content-section">
                        <h2>System Requirements</h2>
                        <div class="requirements-grid">
                            <div class="requirement-card">
                                <h4>Web Browser</h4>
                                <ul>
                                    <li>Chrome 90+</li>
                                    <li>Firefox 88+</li>
                                    <li>Safari 14+</li>
                                    <li>Edge 90+</li>
                                </ul>
                            </div>
                            <div class="requirement-card">
                                <h4>Internet Connection</h4>
                                <ul>
                                    <li>Minimum: 5 Mbps</li>
                                    <li>Recommended: 25 Mbps</li>
                                    <li>Stable connection required</li>
                                </ul>
                            </div>
                            <div class="requirement-card">
                                <h4>Device Specifications</h4>
                                <ul>
                                    <li>RAM: 4GB minimum</li>
                                    <li>Screen: 1024x768 minimum</li>
                                    <li>Mobile responsive</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                  </div>

                  <div class="pagination">
                          <a href="#getting-started" class="prev">
                              <svg class="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                              </svg>
                              <span>Getting Started</span>
                          </a>
                          <a href="#sys-req" class="next">
                              <span>System Requirements</span>
                              <svg class="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                              </svg>
                          </a>
                  </div>
    `,
  };

  function defaultTemplate(section){
    return  `
            <header class="article-header">
                <h1>${section}</h1>
                <p class="article-subtitle">Documentation content for ${section}</p>
                <div class="article-meta">
                    <span class="tag">Documentation</span>
                    <span class="last-updated">Last updated: January 9, 2025</span>
                </div>
            </header>
            <div class="article-content">
                <section class="content-section">
                    <h2>Overview</h2>
                    <p>This section contains detailed information about ${section}. The content is designed to help healthcare professionals understand and effectively use this feature.</p>
                    <div class="info-card">
                        <div class="info-card-header">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9a1 1 0 112 0v4a1 1 0 11-2 0V9zM10 5a1 1 0 100 2 1 1 0 000-2z" fill="#4716ccff"/>
                            </svg>
                            <h3>Need Help?</h3>
                        </div>
                        <p>If you need additional assistance with ${section}, please contact our support team or refer to related documentation sections.</p>
                    </div>
                </section>
            </div>
        `
  }

  return templates[section] || defaultTemplate(section)
}
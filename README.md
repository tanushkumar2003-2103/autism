# Carl Rogers Counselling and Therapy Centre (CRCT) — Website

A responsive, accessible, production-ready healthcare and autism-awareness website built for **Carl Rogers Counselling and Therapy Centre (CRCT)** in Visakhapatnam, Andhra Pradesh.

Designed specifically with a calm, human-centred aesthetic prioritizing autism education, family guidance, professional counselling services, and clear pathways to enquiry.

---

## 1. Verified Brand & Business Information (From Brochure)

All core organization facts are derived directly from the official CRCT brochure (`crct.pdf`):

| Information Field | Verified Detail |
| :--- | :--- |
| **Brand Name** | Carl Rogers Counselling and Therapy Centre (CRCT) |
| **Brand Tagline** | *“ENLIGHTENING THOUGHTS & EQUALISING EMOTIONS”* |
| **Government Registration** | **45134335** |
| **Phone Number** | **+91 7416778925** |
| **Email Address** | **crct.vizag@gmail.com** |
| **Consultation Policy** | **“Consultation on Prior Appointment Only”** |
| **Physical Address** | Door No: 14-37-4/A, Ramsaranya Hospital Opposite, 4th Floor, Opp. Vijaya Medical Centre, Krishna Nagar, Maharanipeta Village, Maharanipeta Mandal, Visakhapatnam District, Andhra Pradesh – 530002 |
| **Operating Timings** | **10:00 AM – 01:00 PM** and **03:00 PM – 09:00 PM** |
| **Verified Professionals** | **Ms. J. Suryakumari** — Psychologist Student Counsellor, Behavioral Therapist<br>**Dr. N. Hari Krishna** — MD (PSYCH), Prof. of Psychiatry (AMC), Ex-Superintendent Govt. Hospital for Mental Care, Visakhapatnam |
| **Services Listed in Brochure** | Stress, Anxiety, Depression, Phobias, Sleep Disorders, OCD, ADHD, Autism, LD (Learning Disability), Substance Abuse, Intellectual Disability (MR), Academic Problems, Career Guidance, Pre-Marital Counselling, Family Counselling, Adolescents Counselling |
| **Modalities in Brochure** | Individual & Group Counselling, Specialized Therapies, Educational Workshops, Cognitive Behavioral Therapy (CBT), Applied Behavior Analysis (ABA) |

---

## 2. Technology Stack

- **Markup:** Semantic HTML5 (`header`, `main`, `nav`, `section`, `article`, `footer`, `aside`, `address`)
- **Styling:** Pure Vanilla CSS3 with CSS Custom Properties (Design Tokens), Flexbox, and CSS Grid.
  - Zero external frameworks (No Bootstrap, Tailwind, or React).
  - Reduced-motion accessibility query (`prefers-reduced-motion: reduce`) included.
  - Custom color palette: Deep Teal (`#174C45`), Muted Sage (`#4D8978`), Warm Ivory (`#F7F4EC`), Soft Mint (`#D8E8E0`), Warm Amber (`#E9BD87`), Dark Text (`#26332F`).
- **Typography:** Google Fonts (`Lora` for headings, `Inter` for body text).
- **Scripting:** Pure Vanilla JavaScript (ES6+).
  - Sticky header scroll effect.
  - Accessible mobile drawer menu with keyboard escape and focus management.
  - Interactive FAQ accordion with full `aria-expanded` and `aria-hidden` states.
  - Client-side enquiry form validation (Phone, Email, Required fields).
  - Dynamic copyright year.
  - Back-to-top button.
- **Hosting Target:** 100% static files ready for direct upload to **Hostinger Shared Hosting** (`public_html`) or any standard web server.

---

## 3. Project File Structure

```text
c:\Users\user\Desktop\TSCG_Projects\Autism\
├── index.html                   # Homepage (All 13 sections in requested order)
├── understanding-autism.html    # In-depth autism spectrum guide & myths vs facts
├── signs-and-guidance.html      # Developmental differences & non-fear guidance
├── parent-guide.html            # Practical home, routine, and sensory strategies
├── services.html                # Official brochure services categorized & modalities
├── about.html                   # Mission, philosophy, and verified professionals
├── resources.html               # FAQ accordion & curated reputable health links
├── contact.html                 # Address, map directions, timings & validated form
├── privacy-policy.html          # Ethical healthcare privacy policy template
├── 404.html                     # Custom branded 404 error page
├── sitemap.xml                  # XML sitemap for search engines
├── robots.txt                   # Search crawler directives
├── README.md                    # Project and deployment documentation
├── css/
│   └── style.css                # Master CSS design system
├── js/
│   └── main.js                  # Accessible Vanilla JS interactions
└── assets/
    ├── images/
    │   ├── hero-counselling.jpg # Authentic South Indian Telugu psychologist & child counselling photo
    │   ├── parent-support.jpg   # South Indian Telugu mother & child reading Chandamama stories with headphones
    │   └── clinic-room.jpg      # South Indian Telugu family therapy consultation in Visakhapatnam clinic
    └── logo/
        ├── crct-official-logo.png # Official client lightbulb & scales logo with arched tagline
        ├── crct-logo.svg        # Crisp vector SVG backup
        └── crct-favicon.png     # PNG browser favicon
```

---

## 4. Hostinger Shared Hosting Deployment Guide

The website has no build step, no npm scripts, and no database requirements. It can be uploaded immediately:

### Option A: Uploading via Hostinger File Manager (Easiest)
1. Log in to your **Hostinger hPanel** (`hpanel.hostinger.com`).
2. Go to **Websites** and click **Manage** next to your domain.
3. In the left sidebar or dashboard, click **File Manager** (Files &rarr; File Manager).
4. Click on the **public_html** directory.
5. If there is a default `default.php` file from Hostinger, delete or rename it.
6. Click the **Upload** icon (up arrow) in the top right.
7. Upload all files and folders from this project so that `index.html` sits directly inside `public_html`:
   ```text
   public_html/
   ├── index.html
   ├── understanding-autism.html
   ├── signs-and-guidance.html
   ├── parent-guide.html
   ├── services.html
   ├── about.html
   ├── resources.html
   ├── contact.html
   ├── privacy-policy.html
   ├── 404.html
   ├── sitemap.xml
   ├── robots.txt
   ├── css/
   ├── js/
   └── assets/
   ```
8. Visit your domain in any browser (`https://yourdomain.com`).

### Option B: Uploading via FTP (FileZilla)
1. In Hostinger hPanel, locate your **FTP Accounts** credentials (Host, Username, Password, Port 21).
2. Open **FileZilla** or your preferred FTP client and connect.
3. Open the remote folder `/public_html/`.
4. Drag and drop all project files into `/public_html/`.

---

## 5. Connecting the Enquiry Form on Hostinger

A static HTML file cannot send emails without a backend or form processing service. Choose one of the following two straightforward methods:

### Method 1: Using Hostinger's Built-in PHP Mail (Zero External Cost)
Create a file named `send-enquiry.php` inside `public_html` with the following code:

```php
<?php
// Simple, secure Hostinger mail handler
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "crct.vizag@gmail.com";
    $subject = "New Enquiry from CRCT Website";
    
    $name = strip_tags(trim($_POST["name"]));
    $phone = strip_tags(trim($_POST["phone"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $topic = strip_tags(trim($_POST["topic"]));
    $message = strip_tags(trim($_POST["message"]));
    
    $body = "New Enquiry Details:\n\n";
    $body .= "Name: $name\n";
    $body .= "Phone: $phone\n";
    $body .= "Email: " . ($email ? $email : "Not provided") . "\n";
    $body .= "Topic: $topic\n";
    $body .= "Message:\n$message\n";
    
    $headers = "From: webmaster@" . $_SERVER['SERVER_NAME'] . "\r\n";
    $headers .= "Reply-To: " . ($email ? $email : "crct.vizag@gmail.com") . "\r\n";
    
    if (mail($to, $subject, $body, $headers)) {
        header("Location: contact.html?status=success");
        exit;
    } else {
        header("Location: contact.html?status=error");
        exit;
    }
}
?>
```

Then in `contact.html`, set the form tag to:
```html
<form id="crctEnquiryForm" action="send-enquiry.php" method="POST">
```

### Method 2: Using a Hosted Service (Formspree or Web3Forms)
1. Sign up for free at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. Enter `crct.vizag@gmail.com` as the destination email.
3. Copy your unique endpoint URL into `contact.html`:
   ```html
   <form id="crctEnquiryForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## 6. Items Requiring Client Verification Before Public Launch

Before officially announcing the website, ensure the CRCT administrative team confirms:
1. **Professional Credentials:** Confirm with Dr. N. Hari Krishna and Ms. J. Suryakumari that their listed designations, affiliations, and titles match their current preferred representation.
2. **Consultation Hours:** Confirm that the 10:00 AM–1:00 PM and 3:00 PM–9:00 PM timings remain unchanged.
3. **Form Destination Email:** Confirm that `crct.vizag@gmail.com` has active monitoring or whether inquiries should also copy an alternate administrative email.
4. **Privacy Policy Review:** Have local management review `privacy-policy.html`.
5. **Google Business Profile:** Add the website URL to CRCT's Google Business profile on Google Maps for local Visakhapatnam SEO visibility.

---

## 7. Accessibility and SEO Compliance

- High contrast text passing WCAG 2.1 AA standards.
- Fully visible focus indicators for keyboard accessibility.
- Skip navigation links on all pages.
- Native HTML semantics with ARIA attributes where needed.
- Open Graph tags, canonical tags, and individual meta descriptions on all pages.
- Dynamic responsive images and lightweight SVGs ensuring fast page loading.

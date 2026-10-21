/**
 * Carl Rogers Counselling and Therapy Centre (CRCT)
 * Vanilla JavaScript (ES6+) Interactions & Functionality
 * Hostinger Static Deployment Ready
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Copyright Year
  const yearElements = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });

  // 2. Header Scrolled State
  const header = document.querySelector('.site-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 3. Mobile Navigation Drawer & Hamburger
  const menuToggle = document.querySelector('.menu-toggle');
  const navDrawer = document.querySelector('.mobile-nav-drawer');
  const navBackdrop = document.querySelector('.mobile-nav-backdrop');

  if (menuToggle && navDrawer) {
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !navDrawer.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen.toString());
      if (isOpen) {
        navDrawer.classList.add('open');
        if (navBackdrop) navBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
      } else {
        navDrawer.classList.remove('open');
        if (navBackdrop) navBackdrop.classList.remove('open');
        document.body.style.overflow = '';
      }
    };

    menuToggle.addEventListener('click', () => toggleMenu());
    if (navBackdrop) {
      navBackdrop.addEventListener('click', () => toggleMenu(false));
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navDrawer.classList.contains('open')) {
        toggleMenu(false);
        menuToggle.focus();
      }
    });

    // Close on navigation link click
    const mobileLinks = navDrawer.querySelectorAll('.mobile-nav-link, .btn');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });
  }

  // 4. Accessible FAQ Accordions
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Optional: Close other open FAQs in same group
        const parent = item.closest('.faq-accordion');
        if (parent) {
          parent.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
              otherItem.classList.remove('active');
              const otherBtn = otherItem.querySelector('.faq-question');
              const otherAns = otherItem.querySelector('.faq-answer');
              if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
              if (otherAns) otherAns.setAttribute('aria-hidden', 'true');
            }
          });
        }

        if (isActive) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
          answer.setAttribute('aria-hidden', 'true');
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
          answer.setAttribute('aria-hidden', 'false');
        }
      });
    }
  });

  // 5. Back to Top Button
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    });
  }

  // 6. Enquiry Form Validation & Honest Static Submission Handling
  const enquiryForm = document.getElementById('crctEnquiryForm');
  if (enquiryForm) {
    const nameInput = document.getElementById('enquiryName');
    const phoneInput = document.getElementById('enquiryPhone');
    const emailInput = document.getElementById('enquiryEmail');
    const topicSelect = document.getElementById('enquiryTopic');
    const messageInput = document.getElementById('enquiryMessage');
    const consentCheck = document.getElementById('enquiryConsent');
    const formAlert = document.getElementById('formAlert');

    // Helper: validate phone (10-15 digits, allows optional +)
    const isValidPhone = (phone) => {
      const cleaned = phone.replace(/[\s\-\(\)]/g, '');
      return /^\+?[0-9]{10,14}$/.test(cleaned);
    };

    // Helper: validate email
    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const clearErrors = () => {
      [nameInput, phoneInput, emailInput, topicSelect].forEach(input => {
        if (input) input.classList.remove('error');
      });
      if (formAlert) {
        formAlert.className = 'form-alert';
        formAlert.innerHTML = '';
      }
    };

    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();
      let hasError = false;

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        nameInput.classList.add('error');
        hasError = true;
      }

      // Validate Phone
      if (!phoneInput.value.trim() || !isValidPhone(phoneInput.value.trim())) {
        phoneInput.classList.add('error');
        hasError = true;
      }

      // Validate Email if provided
      if (emailInput.value.trim() && !isValidEmail(emailInput.value.trim())) {
        emailInput.classList.add('error');
        hasError = true;
      }

      // Validate Topic
      if (!topicSelect.value) {
        topicSelect.classList.add('error');
        hasError = true;
      }

      // Validate Consent Checkbox
      if (consentCheck && !consentCheck.checked) {
        if (formAlert) {
          formAlert.classList.add('visible', 'form-alert-error');
          formAlert.innerHTML = '<strong>Consent Required:</strong> Please check the box confirming your agreement for CRCT to contact you regarding your enquiry.';
        }
        return;
      }

      if (hasError) {
        if (formAlert) {
          formAlert.classList.add('visible', 'form-alert-error');
          formAlert.innerHTML = '<strong>Please correct the highlighted fields:</strong> Ensure your name, contact phone number, and topic are provided accurately.';
        }
        return;
      }

      // Prepare Enquiry Summary for User convenience
      const name = encodeURIComponent(nameInput.value.trim());
      const phone = encodeURIComponent(phoneInput.value.trim());
      const topic = encodeURIComponent(topicSelect.options[topicSelect.selectedIndex].text);
      const userMsg = encodeURIComponent(messageInput ? messageInput.value.trim() : '');

      const whatsappText = `Hello CRCT Team, I would like to enquire regarding: ${topic}. My Name: ${name}, Phone: ${phone}. ${userMsg ? 'Details: ' + userMsg : ''}`;
      const whatsappUrl = `https://wa.me/917416778925?text=${encodeURIComponent(whatsappText)}`;

      // Display Honest Transparent Status Message
      if (formAlert) {
        formAlert.classList.add('visible', 'form-alert-info');
        formAlert.innerHTML = `
          <strong>Enquiry Form Prepared:</strong>
          <p style="margin: 6px 0 10px 0; font-size: 0.85rem;">
            Thank you, <strong>${nameInput.value.trim()}</strong>. On this static deployment demo, no backend email service is connected yet. 
            For immediate support, you can connect directly with CRCT via WhatsApp or Phone:
          </p>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-sm">
              Send via WhatsApp to +91 7416778925
            </a>
            <a href="tel:+917416778925" class="btn btn-primary btn-sm">
              Call CRCT Directly
            </a>
          </div>
          <p style="margin-top: 10px; font-size: 0.72rem; color: #53645F;">
            <em>Note for Webmaster / Client:</em> To receive form submissions directly by email on Hostinger, connect this form action to Formspree, Web3Forms, or a lightweight PHP mail script (full instructions provided in README.md).
          </p>
        `;
      }
    });
  }
});

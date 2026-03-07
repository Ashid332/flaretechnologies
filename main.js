document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================
       Navigation & Mobile Menu
       ========================================================= */
    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    // Toggle Mobile Menu
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close menu on link click
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Scroll Effects for Transparent-to-Solid Header
    let lastScroll = 0;

    // Check initial scroll position on load
    if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
    }

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add blurred background when scrolling down past top
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide nav logic (optional, keeping for UX)
        if (currentScroll <= 0) {
            header.classList.remove('hide-nav');
        } else if (currentScroll > lastScroll && currentScroll > 150) {
            // scrolling down
            header.classList.add('hide-nav');
            // close mobile menu if scrolling
            if (mobileNav.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        } else {
            // scrolling up
            header.classList.remove('hide-nav');
        }
        lastScroll = currentScroll;
    });


    /* =========================================================
       Elegant Scroll Animations (Intersection Observer)
       ========================================================= */
    const scrollObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Triggers when 10% visible to allow early natural fade
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Run animation only once
                observer.unobserve(entry.target);
            }
        });
    }, scrollObserverOptions);

    const animElements = document.querySelectorAll('.scroll-anim');
    animElements.forEach(el => {
        scrollObserver.observe(el);
    });

    /* =========================================================
       Hero 3D Parallax Effect
       ========================================================= */
    const scene = document.getElementById('scene');
    const parallaxLayer = document.querySelector('.parallax-layer');

    if (scene && parallaxLayer) {
        // Only run on desktop where hover makes sense
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            scene.addEventListener('mousemove', (e) => {
                const rect = scene.getBoundingClientRect();

                // Calculate mouse position relative to center of the container (-1 to 1)
                const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
                const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

                // Subtle rotation and translation multipliers
                const depth = parseFloat(parallaxLayer.getAttribute('data-depth')) || 0.15;
                const rotateX = -y * depth * 15; // Max degrees of rotation
                const rotateY = x * depth * 15;
                const translateX = x * depth * 30; // Max px of movement
                const translateY = y * depth * 30;

                // Apply spatial transformation
                parallaxLayer.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            // Smoothly snap back to origin on mouse exit
            scene.addEventListener('mouseleave', () => {
                parallaxLayer.style.transform = `translate3d(0, 0, 0) rotateX(0) rotateY(0)`;
            });
        }
    }

    /* =========================================================
       Flare Technologies AI Sales Assistant Chatbot
       ========================================================= */
    class FlareChatbot {
        constructor() {
            this.body = document.querySelector('.chatbot-body');
            this.input = document.querySelector('.chat-input');
            this.sendBtn = document.querySelector('.chat-send');

            this.captureState = 'IDLE';
            this.leadData = {};
            this.init();
        }

        init() {
            if (!this.body || !this.input || !this.sendBtn) return;

            // Event Listeners for sending messages
            this.sendBtn.addEventListener('click', () => this.handleSubmit());
            this.input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.handleSubmit();
                }
            });
        }

        postBotMessage(htmlContent) {
            const msgDiv = document.createElement('div');
            msgDiv.className = 'chat-message bot-message';
            msgDiv.innerHTML = htmlContent;
            this.body.appendChild(msgDiv);
            this.scrollToBottom();
        }

        postUserMessage(text) {
            const msgDiv = document.createElement('div');
            // Reusing existing text string for user bubble, inline styles to differentiate from bot
            msgDiv.className = 'chat-message user-message';
            msgDiv.style.alignSelf = 'flex-end';
            msgDiv.style.background = 'var(--infinity-gradient)';
            msgDiv.style.color = '#fff';
            msgDiv.style.borderRadius = '20px 20px 4px 20px';
            msgDiv.style.border = 'none';
            msgDiv.textContent = text;
            this.body.appendChild(msgDiv);
            this.scrollToBottom();
        }

        scrollToBottom() {
            this.body.scrollTop = this.body.scrollHeight;
        }

        handleSubmit() {
            const text = this.input.value.trim();
            if (!text) return;

            this.input.value = '';
            this.postUserMessage(text);
            this.processRouting(text);
        }

        startLeadCapture() {
            this.captureState = 'NAME';
            this.leadData = {};
            setTimeout(() => {
                this.postBotMessage("Would you like us to review your project and suggest the best approach?<br><br>First, what is your name?");
            }, 600);
        }

        processRouting(input) {
            const lowerInput = input.toLowerCase();

            setTimeout(() => {
                // --- Stateful Lead Capture Routing ---
                if (this.captureState === 'NAME') {
                    this.leadData.name = input;
                    this.captureState = 'EMAIL';
                    this.postBotMessage(`Thanks, ${this.leadData.name}. What is your best email address?`);
                    return;
                }

                if (this.captureState === 'EMAIL') {
                    this.leadData.email = input;
                    this.captureState = 'PROJECT';
                    this.postBotMessage(`Perfect. What type of project or business are you running?`);
                    return;
                }

                if (this.captureState === 'PROJECT') {
                    this.leadData.project = input;
                    this.captureState = 'GOAL';
                    this.postBotMessage(`Got it. Finally, what is the main goal or challenge you want us to solve?`);
                    return;
                }

                if (this.captureState === 'GOAL') {
                    this.leadData.goal = input;
                    this.captureState = 'IDLE'; // Reset state
                    this.postBotMessage(`Thank you for sharing that context. Our team is ready to help!<br><br>Please select a time on our calendar to discuss your approach:<br><br><a href="#contact" style="display:inline-block; margin-top:10px; padding: 0.5rem 1rem; border-radius: 20px; text-decoration:none; background: var(--infinity-gradient); color: white; font-weight: bold;">Book Consultation</a>`);
                    return;
                }

                // --- Standard Keyword Routing (IDLE State) ---
                let response = "";

                if (lowerInput.includes('website') || lowerInput.includes('build') || lowerInput.includes('software')) {
                    response = "Flare can help design and develop modern websites and digital platforms while also integrating automation and marketing systems if needed.<br><br>Would you like to discuss your project with our team?";
                } else if (lowerInput.includes('automate') || lowerInput.includes('process') || lowerInput.includes('operations') || lowerInput.includes('ai solutions')) {
                    response = "We build AI automation systems that streamline workflows, reduce manual tasks, and improve operational efficiency.<br><br>Would you like to book a consultation or request an audit?";
                } else if (lowerInput.includes('marketing') || lowerInput.includes('growth') || lowerInput.includes('seo')) {
                    response = "We help businesses scale using digital marketing strategies, influencer campaigns, and e-commerce growth systems.<br><br>Would you like to discuss your project with our team?";
                } else if (lowerInput.includes('launch') || lowerInput.includes('product')) {
                    response = "Flare supports product launches through marketing strategy, influencer campaigns, and content production.<br><br>Would you like to speak to a strategist?";
                } else if (lowerInput.includes('book') || lowerInput.includes('consultation') || lowerInput.includes('project') || lowerInput.includes('pricing') || lowerInput.includes('timeline') || lowerInput.includes('audit')) {
                    this.startLeadCapture();
                    return;
                } else if (lowerInput.includes('what do you do') || lowerInput.includes('services') || lowerInput.includes('explore')) {
                    response = "Flare provides AI automation, marketing systems, development services, and cloud infrastructure. Our goal is to provide businesses with a complete ecosystem of solutions rather than isolated services.<br><br>How can we help you scale today?";
                } else {
                    response = "I may not have all the details on that, but our team would be happy to help. You can book a consultation to speak directly with a specialist.";
                }

                this.postBotMessage(response);
            }, 600); // Simulated delay
        }
    }

    // Initialize Chatbot when DOM loads
    if (document.querySelector('.chatbot-wrapper')) {
        new FlareChatbot();
    }

    /* =========================================================
       Chatbot Floating Trigger Logic
       ========================================================= */
    const chatbotTrigger = document.querySelector('.chatbot-trigger');
    const chatbotWindow = document.querySelector('.chatbot-window');
    const chatbotClose = document.querySelector('.chatbot-close');

    if (chatbotTrigger && chatbotWindow && chatbotClose) {
        chatbotTrigger.addEventListener('click', () => {
            chatbotWindow.classList.add('active');
            // Optional: focus input when opened
            const chatInput = chatbotWindow.querySelector('.chat-input');
            if (chatInput) chatInput.focus();
        });

        chatbotClose.addEventListener('click', () => {
            chatbotWindow.classList.remove('active');
        });
    }

});

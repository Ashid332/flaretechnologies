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

    // Hide Header on Scroll Down, Show on Scroll Up
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            header.classList.remove('hide-nav');
        } else if (currentScroll > lastScroll && currentScroll > 100) {
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
       Scroll Animations (Intersection Observer)
       ========================================================= */
    const scrollObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // trigger when 15% visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // unobserve if we only want it to animate once
                observer.unobserve(entry.target);
            }
        });
    }, scrollObserverOptions);

    const animElements = document.querySelectorAll('.scroll-anim');
    animElements.forEach(el => {
        scrollObserver.observe(el);
    });


    /* =========================================================
       Three.js Interactive AI Network Sphere
       ========================================================= */
    const canvasContainer = document.getElementById('hero-canvas');
    if (typeof THREE !== 'undefined' && canvasContainer) {
        initThreeJS(canvasContainer);
    }

});

function initThreeJS(container) {
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 300;

    // WebGL Renderer with alpha for transparency
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Particle Group
    const particles = new THREE.Group();
    scene.add(particles);

    // Geometry & Material for the Sphere
    const geometry = new THREE.IcosahedronGeometry(120, 2); // Radius 120, detail 2 matches network complexity

    // We want to render a wireframe and particles at the vertices
    // 1. Lines (Network)
    const wireframeMaterial = new THREE.LineBasicMaterial({
        color: 0x007BFF, // Electric Blue
        transparent: true,
        opacity: 0.3
    });
    const wireframe = new THREE.LineSegments(
        new THREE.WireframeGeometry(geometry),
        wireframeMaterial
    );
    particles.add(wireframe);

    // 2. Dots (Nodes)
    const pointsMaterial = new THREE.PointsMaterial({
        color: 0xFFFFFF,
        size: 3,
        transparent: true,
        opacity: 0.8
    });
    const points = new THREE.Points(geometry, pointsMaterial);
    particles.add(points);

    // Add some random floating distinct nodes (satellites)
    const satGeometry = new THREE.BufferGeometry();
    const satCount = 50;
    const satPosArray = new Float32Array(satCount * 3);

    for (let i = 0; i < satCount * 3; i++) {
        // distribute randomly in a larger sphere area
        satPosArray[i] = (Math.random() - 0.5) * 400;
    }
    satGeometry.setAttribute('position', new THREE.BufferAttribute(satPosArray, 3));
    const satMaterial = new THREE.PointsMaterial({
        size: 2,
        color: 0x00E5FF, // Cyan accents
        transparent: true,
        opacity: 0.5
    });
    const satellites = new THREE.Points(satGeometry, satMaterial);
    scene.add(satellites);

    // Interactivity Support (Mouse Tracking)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    });

    // Handle Resize
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });

    // Animation Loop
    const animate = () => {
        requestAnimationFrame(animate);

        // Slow idle rotation
        particles.rotation.y += 0.002;
        particles.rotation.x += 0.001;

        satellites.rotation.y -= 0.001;
        satellites.rotation.z += 0.0005;

        // Smooth mouse follow interpolation
        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;

        particles.rotation.y += 0.05 * (targetX - particles.rotation.y);
        particles.rotation.x += 0.05 * (targetY - particles.rotation.x);

        renderer.render(scene, camera);
    };

    animate();
}

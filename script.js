// script.js

gsap.timeline({ defaults: { duration: 0.8, ease: "power2.out" } })
  .to(".line", {
    opacity: 1,
    y: 0,
    stagger: 0.3
  });

// Fondo animado RGB con efecto de movimiento al mouse
const body = document.querySelector("body");
let hue = 120;

function animateBackground() {
  hue += 0.5;
  if (hue > 360) hue = 0;
  body.style.background = `linear-gradient(135deg, hsl(${hue}, 70%, 90%), hsl(${(hue + 60) % 360}, 70%, 95%))`;
  requestAnimationFrame(animateBackground);
}

animateBackground();

// Movimiento del fondo al mover el mouse
body.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  body.style.transform = `translate(${x}px, ${y}px)`;
});

// Crear estructura de la tarjeta con animación
const container = document.querySelector(".container");

const cardWrapper = document.createElement("div");
cardWrapper.className = "card";

const bg = document.createElement("div");
bg.className = "bg";

const blob = document.createElement("div");
blob.className = "blob";

container.parentNode.insertBefore(cardWrapper, container);
cardWrapper.appendChild(bg);
cardWrapper.appendChild(blob);
cardWrapper.appendChild(container);

// Animación en botón con nuevo color RGB
const ctaButton = document.querySelector(".cta");
ctaButton.addEventListener("mouseenter", () => {
  gsap.to(ctaButton, { scale: 1.1, backgroundColor: "rgb(0, 162, 255)", color: "white", duration: 0.3 });
});
ctaButton.addEventListener("mouseleave", () => {
  gsap.to(ctaButton, { scale: 1, backgroundColor: "rgb(0, 140, 255)", color: "white", duration: 0.3 });
});

// Animación en avatar con halo giratorio
const avatar = document.querySelector(".avatar");
gsap.fromTo(
  avatar,
  { scale: 0, rotation: 360 },
  { scale: 1, rotation: 0, duration: 1.2, ease: "bounce.out" }
);

// Cambiar halo a color azul RGB
const halo = document.querySelector(".avatar-halo");
if (halo) {
  halo.style.background = "conic-gradient(from 0deg, rgb(0, 140, 255), transparent 50%, rgb(0, 140, 255))";
}

// Efecto de texto tipo máquina de escribir estilo matrix
const typeText = document.querySelector(".typewriter");
if (typeText) {
  const originalText = typeText.textContent;
  typeText.textContent = "";
  let index = 0;
  const typeInterval = setInterval(() => {
    if (index < originalText.length) {
      typeText.textContent += originalText.charAt(index);
      index++;
    } else {
      clearInterval(typeInterval);
    }
  }, 70);
}
const ctaWrapper = document.querySelector(".cta-wrapper");
const ctaGlow = ctaWrapper.querySelector(".cta-glow");

ctaWrapper.addEventListener("mousemove", (e) => {
  const rect = ctaWrapper.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  ctaGlow.style.left = `${x - 100}px`; // 100 = mitad de 200px
  ctaGlow.style.top = `${y - 100}px`;
  ctaGlow.style.opacity = 1;
});

ctaWrapper.addEventListener("mouseleave", () => {
  ctaGlow.style.opacity = 0;
});

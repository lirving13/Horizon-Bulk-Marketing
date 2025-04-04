/* script.js */

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  const navUl = document.querySelector('nav ul');
  
  mobileMenu.addEventListener('click', function() {
    navUl.classList.toggle('show');
    mobileMenu.classList.toggle('open');
  });
});

// three.js hero background for index page
if(document.getElementById('hero-canvas')) {
  let scene, camera, renderer, geometry, material, mesh;
  const canvas = document.getElementById('hero-canvas');

  function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 2;

    renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create a rotating sphere as a dynamic background element
    geometry = new THREE.SphereGeometry(0.8, 32, 32);
    material = new THREE.MeshStandardMaterial({ color: 0x2a2a72, roughness: 0.5, metalness: 0.1 });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Add a point light for subtle illumination
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    animate();
  }

  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.005;
    renderer.render(scene, camera);
  }

  window.addEventListener('resize', () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  });

  init();
}

import particlesJS from 'particlesJS';

const Particles = () => {
    return particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles-js config loaded');
    });
}

export default Particles;
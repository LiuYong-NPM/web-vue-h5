<template>
    <div class="my-heart">
        <canvas id="pinkboard"></canvas>
    </div>
</template>

<script>
export default {
    name: 'myHeart',
    trendsRoute: true,
    data() {
        return {
            settings: {
                particles: {
                    length: 500, // maximum amount of particles
                    duration: 2, // particle duration in sec
                    velocity: 100, // particle velocity in pixels/sec
                    effect: -0.75, // play with this for a nice effect
                    size: 30, // particle size in pixels
                }
            }
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.my-heart {
    position: relative;

    #pinkboard {
        position: absolute;
        width: 100%;
        height: 100%;
    }
}
</style>
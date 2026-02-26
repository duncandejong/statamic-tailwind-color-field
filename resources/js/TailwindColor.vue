<template>
    <div>
        <div v-if="swatches" class="flex gap-3">
            <div
                v-for="swatch in swatches"
                :key="swatch.key"
                class="inline-block w-10 h-10 border border-gray-400 rounded cursor-pointer"
                :class="{
                    'opacity-50 hover:opacity-100 scale-125': swatch.key !== value,
                }"
                :style="{ backgroundColor: swatch.hex }"
                @click="updateValue(swatch.key)"
            >
                <div
                    v-if="swatch.key === value"
                    class="flex items-center justify-center w-full h-full"
                >
                    <div
                        class="flex items-center justify-center w-5 h-5 rounded-full bg-black/10"
                    >
                        <svg
                            version="1.1"
                            role="presentation"
                            width="12"
                            height="12"
                            viewBox="0 0 1792 1792"
                            class="text-white"
                        >
                            <path
                                fill="currentColor"
                                d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, getCurrentInstance} from 'vue';
import {FieldtypeMixin} from '@statamic/cms';

// Allow mixins in <script setup>
defineOptions({
    mixins: [FieldtypeMixin],
});

// Access mixin-provided properties (value, config, update)
const {proxy} = getCurrentInstance();

const value = computed(() => proxy.value);
const config = computed(() => proxy.config);

const swatches = computed(() => {
    if (!config.value?.swatches) {
        return null;
    }

    return Object.keys(config.value.swatches).map((key) => ({
        key,
        hex: config.value.swatches[key],
    }));
});

function updateValue(val) {
    proxy.update(val);
}
</script>

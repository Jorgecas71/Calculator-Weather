<script>
export default {
    data() {
        return {
            amount: 1,
            fromCurrency: 'EUR',
            toCurrency: 'USD',
            convertedAmount: null,
            currencies: ['EUR', 'USD', 'JPY', 'HNL'],
            exchangeRates: {
                EUR: {
                    USD: 1.1,
                    JPY: 130,
                    HNL: 26.5,
                },
                USD: {
                    EUR: 0.91,
                    JPY: 118,
                    HNL: 24,
                },
                JPY: {
                    EUR: 0.0077,
                    USD: 0.0085,
                    HNL: 0.2,
                },
                HNL: {
                    EUR: 0.038,
                    USD: 0.042,
                    JPY: 5,
                },
            },
        };
    },
    methods: {
        convert() {
            if (this.fromCurrency === this.toCurrency) {
                this.convertedAmount = this.amount;
            } else {
                const rate = this.exchangeRates[this.fromCurrency][this.toCurrency];
                this.convertedAmount = (this.amount * rate).toFixed(2);
            }
        },
    },
};
</script>


<template>
    <div class="currency-converter">
        <div>
            <select v-model="fromCurrency">
                <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
            </select>
        </div>
        <div>

            <input type="number" v-model.number="amount" />
        </div>
        <div>
            <select v-model="toCurrency">
                <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
            </select>
        </div>
        <div>
            <button @click="convert">Convert</button>
        </div>
        <div v-if="convertedAmount !== null">
            <h2>{{ amount }} {{ fromCurrency }} = {{ convertedAmount }} {{ toCurrency }}</h2>
        </div>
    </div>
</template>

<style lang="scss">
$color_1: white;
$color_2: black;
$background-color_1: black;
$background-color_2: #562372;
$background-color_3: #DDA5F9;
$background-color_4: #ca94e6;

.currency-converter {
    max-width: 400px;
    background-color: $background-color_1;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;

    div {
        margin-bottom: 10px;
    }

    label {
        display: inline-block;
        width: 60px;
    }

    select {
        width: 100%;
        padding: 5px;
        background-color: $background-color_2;
        color: $color_1;
    }

    input {
        width: 100%;
        padding: 5px;
        background-color: $background-color_2;
        color: $color_1;
    }

    button {
        width: 100%;
        padding: 10px;
        background-color: $background-color_3;
        color: $color_2;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background-color: $background-color_4;
        }
    }

    h2 {
        text-align: center;
        color: &$color_1;
    }
}
</style>
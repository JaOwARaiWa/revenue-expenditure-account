<template>
    <div class="container">
        <table>
            <thead>
                <tr>
                    <th>ครั้งที่</th>
                    <th>วัน/เดือน/ปี</th>
                    <th>รายละเอียด</th>
                    <th>รายรับ</th>
                    <th>รายจ่าย</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(rec, index) in records" :key="index">
                    <td>{{ index + 1 }}</td>

                    <td>{{ rec.date }}</td>

                    <td>{{ rec.detail }}</td>

                    <td v-if="rec.type === 1">{{ rec.amount }}</td>
                    <td v-if="rec.type !== 1">-</td>

                    <td v-if="rec.type === 2">{{ rec.amount }}</td>
                    <td v-if="rec.type !== 2">-</td>
                </tr>
            </tbody>
        </table>

        <table>
            <thead>
                <tr>
                    <th>รายรับรวม</th>
                    <th>รายจ่ายรวม</th>
                    <th>ยอดเงินคงเหลือ</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ total.income }}</td>
                    <td>{{ total.expenses }}</td>
                    <td>{{ total.balance }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import RecordStore from '@/store/record'

export default {
    data() {
        return {
            records: [],
            total: {}
        }
    },
    created() {
        this.fetchData()
        this.sumTotal()
    },
    methods: {
        fetchData() {
            //RecordStore.dispatch('fetchData')
            this.records = RecordStore.getters.records
        },
        sumTotal() {
            RecordStore.dispatch('sumTotal')
            this.total = RecordStore.getters.total
        }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        text-align: center;
    }
    table {
        width: 70%;
        padding: 20px;
    }
    td {
        padding: 10px;
    }

</style>
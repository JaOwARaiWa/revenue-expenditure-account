<template>
    <div class="container">
        <h3>บันทึกรายรับ-รายจ่าย</h3>

        <div class="box">
            <div class="grid">
                <label for="type">ประเภท </label>
                <select class="content" v-model="form.type">
                    <option value="1">รายรับ</option>
                    <option value="2">รายจ่าย</option>
                </select>
            </div>
            <br>
            <div class="grid">
                <label for="amount">จำนวนเงิน </label>
                <input class="content" type="number" v-model="form.amount">
            </div>
            <br>
            <div class="grid">
                <label for="date">วันที่ </label>
                <input class="content" type="date" v-model="form.date">
            </div>
            <br>
            <div class="grid">
                <label for="detail">รายละเอียด </label>
                <input class="content" type="text" v-model="form.detail">
            </div>
            <br>
            <div>
                <button @click="addRecord">บันทึก</button>
            </div>
        </div>
    </div>
</template>

<script>
import RecordStore from '@/store/record'

export default {
    data() {
        return {
            form: {
                type: '',
                amount: 0,
                date: null,
                detail: ''
            }
        }
    },
    methods: {
        clearForm() {
            this.form = {
                type: '',
                amount: 0,
                date: null,
                detail: ''
            }
        },
        addRecord() {
            let payload = {
                type: Number(this.form.type),
                amount: Number(this.form.amount),
                date: this.form.date,
                detail: this.form.detail
            }

            RecordStore.dispatch('addRecord', payload)
            RecordStore.dispatch('sumTotal')
            this.clearForm()
        }
    }
}
</script>

<style lang="scss" scoped>
    h3 {
        font-size: 1.75em;
        margin-top: -20px;
        text-align: center;
    }
    .box {
        max-width: 400px;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        align-content: center;
    }
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 40px;
    }
    label {
        padding: 10px;
    }
    button {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 20%;
        height: 30px;
    }
</style>
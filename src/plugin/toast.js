import {Message} from 'element-ui'

export default {
		methods : {
				show(text = '', type = 'success') {
						Message({type, message: text})
				},

				showWarn(text = '', type = 'warning') {
						this.show(text, type)
				},

				showError(text = '', type = 'error') {
						this.show(text, type)
				},

				formatDate(timestamp, format = 'yyyy-MM-dd HH:mm') {
						// if (!Number(timestamp)) { 		throw new Error("parameter must be a Number.") }
						const len = timestamp
								.toString()
								.length
						if (len !== 10 && len !== 13) { // 这里必须是 && 并集。
								throw new Error('Number expected to be 10 or 13 at length.')
						}
						const time = Number(timestamp)
								.toString()
								.length === 10
								? timestamp * 1000
								: timestamp

						const padZero = number => number
								.toString()
								.replace(/^(\d)$/, "0$1") // 补0
						const newDate = new Date(Number(time))
						const year = newDate.getFullYear()
						const month = newDate.getMonth() + 1
						const date = newDate.getDate()
						const hours = newDate.getHours()
						const minutes = newDate.getMinutes()

						switch (format) {
								case 'yyyy-MM-dd':
										return `${padZero(year)}-${padZero(month)}-${padZero(date)}`
										break;
								case 'MM-dd':
										return `${padZero(month)}-${padZero(date)}`
										break;
								case 'HH:mm':
										return `${padZero(hours)}:${padZero(minutes)}`
										break
								default:
										return `${padZero(year)}-${padZero(month)}-${padZero(date)} ${padZero(hours)}:${padZero(minutes)}`
						}
				}

		}
}
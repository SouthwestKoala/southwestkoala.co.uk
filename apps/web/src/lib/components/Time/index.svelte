<script lang="ts">
	import dayjs from '$lib/config/dayjs';

	export let datetime: string = new Date().toISOString();
	export let format = 'DD MMM YYYY';
</script>

<time {datetime}>
	{dayjs(datetime).format(format)}
</time>

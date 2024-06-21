


<template>

	<div id="appBg">
		<form name="calculator">

			<input type="textfield" name="ans" value="" autocomplete="of" readonly>

			<input type="button" value="7" onclick="document.calculator.ans.value+='7'" class="morado">
			<input type="button" value="8" onclick="document.calculator.ans.value+='8'" class="morado">
			<input type="button" value="9" onclick="document.calculator.ans.value+='9'" class="morado">
			<input type="button" value="+" onclick="document.calculator.ans.value+='+'" class="lila">
			<br>
			<input type="button" value="4" onclick="document.calculator.ans.value+='4'" class="morado">
			<input type="button" value="5" onclick="document.calculator.ans.value+='5'" class="morado">
			<input type="button" value="6" onclick="document.calculator.ans.value+='6'" class="morado">
			<input type="button" value="-" onclick="document.calculator.ans.value+='-'" class="lila">
			<br>
			<input type="button" value="1" onclick="document.calculator.ans.value+='1'" class="morado">
			<input type="button" value="2" onclick="document.calculator.ans.value+='2'" class="morado">
			<input type="button" value="3" onclick="document.calculator.ans.value+='3'" class="morado">
			<input type="button" value="x" onclick="document.calculator.ans.value+='*'" class="lila">
			<br>
			<input type="button" value="0" onclick="document.calculator.ans.value+='0'" class="morado">
			<input type="reset" value="CE">
			<input type="button" value="=" onclick="document.calculator.ans.value=eval(document.calculator.ans.value)">
			<input type="button" value="/" onclick="document.calculator.ans.value+='/'" class="lila">
			<br>
			<input type="button" value="." onclick="document.calculator.ans.value+='.'" class="lila">
			<input type="button" value="" onclick="document.calculator.ans.value+=''" class="lila">
			<input type="button" value="" onclick="document.calculator.ans.value+=''" class="lila">
			<input type="button" value="," onclick="document.calculator.ans.value+=','" class="lila">
		</form>
	</div>


</template>

<style lang="scss">
$color_1: #fff;
$color_2: #000;
$color_3: black;
$color_4: white;
$font-family_1: 'Roboto', sans-serif;
$background-color_1: rgb(0, 0, 0);
$background-color_2: rgb(221, 165, 249);
$background-color_3: rgb(86, 35, 114);

#appBg {
	height: 520px;
	width: 300px;
	border: 1px solid black;
	border-radius: 5px;

	form {
		height: 100%;
		width: 100%;
		background-color: $background-color_1;
	}

	input[type=textfield] {
		height: 25%;
		width: 100%;
		cursor: default;
		font-family: $font-family_1;
		background-color: $background-color_1;
		color: $color_1;
		padding: 15px;
		text-align: right;
		font-size: 50px;
		border: 0;
		outline: none;
	}

	input[type=button] {
		width: 22%;
		cursor: pointer;
		font-family: $font-family_1;
		font-weight: bold;
		font-size: 22px;
		color: $color_2;
		padding: 18px;
		margin: 3px;
		border: 0;
		border-radius: 100%;
	}

	.lila {
		background-color: $background-color_2 !important;
		color: $color_3 !important;
	}

	.morado {
		background-color: $background-color_3 !important;
		color: $color_4 !important;
	}
}

input[type=reset] {
	width: 22%;
	cursor: pointer;
	font-family: $font-family_1;
	font-weight: bold;
	font-size: 22px;
	color: $color_2;
	padding: 18px;
	margin: 3px;
	border: 0;
	border-radius: 100%;
}
</style>
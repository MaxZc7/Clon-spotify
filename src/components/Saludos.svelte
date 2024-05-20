<script lang="ts">
const current_time = new Date()
const current_Hour = current_time.getHours()

let saludos = ""

if (current_Hour < 12) {
    saludos = "Buenas dias"
} else if (current_Hour > 12 && current_Hour < 18 ){
    saludos = "Buenas tardes"
} else {
 saludos = "Buenas noches"
}
</script> 

<h4 class="text-white text-3xl pt-5 font-bold ">
    {saludos}
</h4>
<template lang="">
    <div>
        <Nuxt/>
    </div>
</template>
<script>
export default {
    
    created(){
        if(process.browser){
            const token = localStorage.getItem('token')
            console.log(token)   
        }
        
    }
    
}
</script>
<style lang="">
    
</style>
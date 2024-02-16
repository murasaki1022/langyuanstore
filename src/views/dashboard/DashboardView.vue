<template>
    <div>
        <h1>這是後台</h1>
        <nav>
            <RouterLink to="/admin/products">產品列表</RouterLink> |
            <RouterLink to="/admin/order">訂單列表</RouterLink> |
            <RouterLink to="/">回到前台</RouterLink>
        </nav>
        <router-view></router-view>
    </div>
</template>

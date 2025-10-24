import *as React from "react"
import {
    Banner,
    Products,
    TestProducts,
    TopCategories,
} from '../components/widgets/index'

export default function HomePage() {
    return (
        <div>
            <Banner />
            <Products />
            <TestProducts />
            <TopCategories />
        </div>
    )
}
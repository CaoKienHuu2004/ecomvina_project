'use client'; // Thêm dòng này nếu component sử dụng các tính năng client-side

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (

  <div class="preloader">
    <img src="assets/images/icon/preloader.gif" alt="">
  </div>



<div class="overlay"></div>



<div class="side-overlay"></div>

<div class="progress-wrap">
  <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
  </svg>
</div>

 <form action="#" class="search-box">
  <button type="button" class="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1">
    <i class="ph ph-x"></i>
  </button>
  <div class="container">
    <div class="position-relative">
      <input type="text" class="form-control py-16 px-24 text-xl rounded-pill pe-64" placeholder="Search for a product or brand">
      <button type="submit" class="w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8">
        <i class="ph ph-magnifying-glass"></i>
      </button>
    </div>
  </div>
 </form>
<!-- ==================== Search Box End Here ==================== -->

<!-- ==================== Mobile Menu Start Here ==================== -->
<div class="mobile-menu scroll-sm d-lg-none d-block">
    <button type="button" class="close-button"> <i class="ph ph-x"></i> </button>
    <div class="mobile-menu__inner">
        <a href="index.html" class="mobile-menu__logo">
            <img src="assets/images/logo/logo.png" alt="Logo">
        </a>
        <div class="mobile-menu__menu">
            <!-- Nav Menu Start -->
<ul class="nav-menu flex-align nav-menu--mobile">
    <li class="on-hover-item nav-menu__item has-submenu activePage">
        <a href="javascript:void(0)" class="nav-menu__link text-heading-two">Home</a>
        <ul class="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
            <li class="common-dropdown__item nav-submenu__item activePage">
                <a href="index.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Home Grocery</a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="index-two.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Home Electronics</a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="index-three.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Home Fashion</a>
            </li>
        </ul>
    </li>
    <li class="on-hover-item nav-menu__item has-submenu">
        <a href="javascript:void(0)" class="nav-menu__link text-heading-two">Shop</a>
         <ul class="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
            <li class="common-dropdown__item nav-submenu__item">
                <a href="shop.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Shop</a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="product-details.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Shop Details</a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="product-details-two.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Shop Details Two</a>
            </li>
        </ul>
    </li>
    <li class="on-hover-item nav-menu__item has-submenu">
        <span class="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">New</span>
        <a href="javascript:void(0)" class="nav-menu__link text-heading-two">Pages</a>
         <ul class="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
            <li class="common-dropdown__item nav-submenu__item">
                <a href="cart.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Cart</a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="wishlist.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Wishlist</a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="checkout.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Checkout </a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="become-seller.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Become Seller</a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="account.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Account</a>
            </li>
        </ul>
    </li>
    <li class="on-hover-item nav-menu__item has-submenu">
        <span class="badge-notification bg-tertiary-600 text-white text-sm py-2 px-8 rounded-4">New</span>
        <a href="javascript:void(0)" class="nav-menu__link text-heading-two">Vendors</a>
         <ul class="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
            <li class="common-dropdown__item nav-submenu__item">
                <a href="vendor.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Vendors </a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="vendor-details.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Vendor Details </a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="vendor-two.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Vendors Two</a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="vendor-two-details.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Vendors Two Details</a>
            </li>
        </ul>
    </li>
    <li class="on-hover-item nav-menu__item has-submenu">
        <a href="javascript:void(0)" class="nav-menu__link text-heading-two">Blog</a>
         <ul class="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
            <li class="common-dropdown__item nav-submenu__item">
                <a href="blog.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Blog</a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="blog-details.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Blog Details</a>
            </li>
        </ul>
    </li>
    <li class="nav-menu__item">
        <a href="contact.html" class="nav-menu__link text-heading-two">Contact Us</a>
    </li>
</ul>
<!-- Nav Menu End -->
        </div>
    </div>
</div>
<!-- ==================== Mobile Menu End Here ==================== -->


    <!-- ======================= Middle Top Start ========================= -->
<div class="header-top bg-main-600 flex-between py-10">
    <div class="container container-lg">
        <div class="flex-between flex-wrap gap-8">

            <div class="text-white text-sm d-flex align-items-center gap-4">
                <img src="assets/images/icon/track-icon.png" alt="Track Icon">
                <span class="">We deliver to you every day from 7.00 to 23.00</span>
            </div>
            
            <div class="d-flex align-items-center gap-6 flex-wrap">
                <span class="text-md fw-medium text-white">Until the end of the sale:</span>
                <div class="d-flex align-items-center gap-10" id="countdown25">
                    <div class="d-flex align-items-center gap-4 text-white">
                        <strong class="text-md fw-semibold days">35</strong> 
                        <span class="text-xs">Days</span>
                    </div>
                    <div class="d-flex align-items-center gap-4 text-white">
                        <strong class="text-md fw-semibold hours">14</strong> 
                        <span class="text-xs">Hours</span>
                    </div>
                    <div class="d-flex align-items-center gap-4 text-white">
                        <strong class="text-md fw-semibold minutes">54</strong> 
                        <span class="text-xs">Minutes</span>
                    </div>
                    <div class="d-flex align-items-center gap-4 text-white">
                        <strong class="text-md fw-semibold seconds">28 </strong> 
                        <span class="text-xs">Sec.</span>
                    </div>
                </div>
            </div>


            <ul class="header-top__right flex-align flex-wrap gap-16">
                <li class="">
                    <a href="javascript:void(0)" class="text-white-6 text-sm hover-text-white">Track Order</a>
                </li>
                <li class="">
                    <a href="javascript:void(0)" class="text-white-6 text-sm hover-text-white">About Us</a>
                </li>
                <li class="">
                    <a href="contact.html" class="text-white-6 text-sm hover-text-white">Contact</a>
                </li>
                <li class="">
                    <a href="wishlist.html" class="text-white-6 text-sm hover-text-white">Wishlist</a>
                </li>
            </ul>
        </div>
    </div>
</div>
<!-- ======================= Middle Top End ========================= -->

    <!-- ======================= Middle Header Two Start ========================= -->
<header class="header-middle border-bottom border-neutral-40 py-4">
    <div class="container container-lg">
        <nav class="header-inner flex-between gap-8">
            <!-- Logo Start -->
            <div class="logo">
                <a href="index.html" class="link">
                    <img src="assets/images/logo/logo-two.png" alt="Logo">
                </a>
            </div>
            <!-- Logo End  -->

             <!-- Menu Start  -->
             <div class="header-menu d-lg-block d-none">
                <!-- Nav Menu Start -->
<ul class="nav-menu flex-align ">
    <li class="on-hover-item nav-menu__item has-submenu activePage">
        <a href="javascript:void(0)" class="nav-menu__link text-heading-two">Home</a>
        <ul class="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
            <li class="common-dropdown__item nav-submenu__item activePage">
                <a href="index.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Home Grocery</a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="index-two.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Home Electronics</a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="index-three.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Home Fashion</a>
            </li>
        </ul>
    </li>
    <li class="on-hover-item nav-menu__item has-submenu">
        <a href="javascript:void(0)" class="nav-menu__link text-heading-two">Shop</a>
         <ul class="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
            <li class="common-dropdown__item nav-submenu__item">
                <a href="shop.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Shop</a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="product-details.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Shop Details</a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="product-details-two.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Shop Details Two</a>
            </li>
        </ul>
    </li>
    <li class="on-hover-item nav-menu__item has-submenu">
        <span class="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">New</span>
        <a href="javascript:void(0)" class="nav-menu__link text-heading-two">Pages</a>
         <ul class="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
            <li class="common-dropdown__item nav-submenu__item">
                <a href="cart.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Cart</a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="wishlist.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Wishlist</a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="checkout.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Checkout </a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="become-seller.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Become Seller</a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="account.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Account</a>
            </li>
        </ul>
    </li>
    <li class="on-hover-item nav-menu__item has-submenu">
        <span class="badge-notification bg-tertiary-600 text-white text-sm py-2 px-8 rounded-4">New</span>
        <a href="javascript:void(0)" class="nav-menu__link text-heading-two">Vendors</a>
         <ul class="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
            <li class="common-dropdown__item nav-submenu__item">
                <a href="vendor.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Vendors </a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="vendor-details.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Vendor Details </a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="vendor-two.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Vendors Two</a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="vendor-two-details.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Vendors Two Details</a>
            </li>
        </ul>
    </li>
    <li class="on-hover-item nav-menu__item has-submenu">
        <a href="javascript:void(0)" class="nav-menu__link text-heading-two">Blog</a>
         <ul class="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
            <li class="common-dropdown__item nav-submenu__item">
                <a href="blog.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Blog</a>
            </li>
            <li class="common-dropdown__item nav-submenu__item">
                <a href="blog-details.html" class="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100"> Blog Details</a>
            </li>
        </ul>
    </li>
    <li class="nav-menu__item">
        <a href="contact.html" class="nav-menu__link text-heading-two">Contact Us</a>
    </li>
</ul>
<!-- Nav Menu End -->
            </div>
            <!-- Menu End  -->
             
             <!-- Middle Header Right start -->
             <div class="header-right flex-align">
                <!-- Dropdown Select Start -->
                <ul class="header-top__right style-two style-three flex-align flex-wrap">
                    <li class="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                        <a href="javascript:void(0)" class="selected-text selected-text text-neutral-500 fw-semibold text-sm py-8 text-sm py-8">Eng</a>
                        <ul class="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                            <li>
                                <a href="javascript:void(0)" class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"> 
                                    <img src="assets/images/thumbs/flag1.png" alt="" class="w-16 h-12 rounded-4 border border-gray-100">
                                    English
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"> 
                                    <img src="assets/images/thumbs/flag2.png" alt="" class="w-16 h-12 rounded-4 border border-gray-100">
                                    Japan
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"> 
                                    <img src="assets/images/thumbs/flag3.png" alt="" class="w-16 h-12 rounded-4 border border-gray-100">
                                    French
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"> 
                                    <img src="assets/images/thumbs/flag4.png" alt="" class="w-16 h-12 rounded-4 border border-gray-100">
                                    Germany
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"> 
                                    <img src="assets/images/thumbs/flag6.png" alt="" class="w-16 h-12 rounded-4 border border-gray-100">
                                    Bangladesh
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"> 
                                    <img src="assets/images/thumbs/flag5.png" alt="" class="w-16 h-12 rounded-4 border border-gray-100">
                                    South Korea
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                        <a href="javascript:void(0)" class="selected-text selected-text text-neutral-500 fw-semibold text-sm py-8 text-sm py-8">USD</a>
                        <ul class="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                            <li>
                                <a href="javascript:void(0)" class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"> 
                                    <img src="assets/images/thumbs/flag1.png" alt="" class="w-16 h-12 rounded-4 border border-gray-100">
                                    USD
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"> 
                                    <img src="assets/images/thumbs/flag2.png" alt="" class="w-16 h-12 rounded-4 border border-gray-100">
                                    Yen
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"> 
                                    <img src="assets/images/thumbs/flag3.png" alt="" class="w-16 h-12 rounded-4 border border-gray-100">
                                    Franc 
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"> 
                                    <img src="assets/images/thumbs/flag4.png" alt="" class="w-16 h-12 rounded-4 border border-gray-100">
                                    EURO
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"> 
                                    <img src="assets/images/thumbs/flag6.png" alt="" class="w-16 h-12 rounded-4 border border-gray-100">
                                    BDT
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"> 
                                    <img src="assets/images/thumbs/flag5.png" alt="" class="w-16 h-12 rounded-4 border border-gray-100">
                                    WON
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="d-sm-flex d-none">
                        <a href="javascript:void(0)" class="selected-text selected-text text-neutral-500 fw-semibold text-sm py-8 text-sm py-8 hover-text-heading">Order Tracking</a>
                    </li>
                </ul>
                <!-- Dropdown Select End -->
                <button type="button" class="toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex"> <i class="ph ph-list"></i> </button>
            </div>
            <!-- Middle Header Right End  -->
            
        </nav>
    </div>
</header>
<!-- ======================= Middle Header Two End ========================= -->

    <!-- ==================== Header Two Start Here ==================== -->
<header class="header bg-white  pt-24">
    <div class="container container-lg">
        <nav class="header-inner d-flex justify-content-between gap-16">
            <div class="d-flex w-100">

                <!-- Category Dropdown Start -->
                <div class="category-two h-100 d-block flex-shrink-0">
                    <button type="button" class="category__button flex-align gap-8 fw-medium bg-main-two-600 py-16 px-20 text-white h-100 md-rounded-top">
                        <span class="icon text-2xl d-md-flex d-none"><i class="ph ph-squares-four"></i></span>
                        <span class="d-lg-flex d-none">All</span>  Categories
                        <span class="arrow-icon text-md d-flex ms-auto"><i class="ph ph-caret-down"></i></span>
                    </button>

                    <div class="responsive-dropdown common-dropdown d-lg-none d-block nav-submenu p-0 submenus-submenu-wrapper shadow-none border border-gray-100">
    <button type="button" class="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"> <i class="ph ph-x"></i> </button>

    <div class="logo px-16 d-lg-none d-block">
        <a href="index.html" class="link">
            <img src="assets/images/logo/logo.png" alt="Logo">
        </a>
    </div>

    <ul class="scroll-sm p-0 py-8 overflow-y-auto">
        <li class="has-submenus-submenu">
            <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                <span>Cell Phone</span>
                <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
            </a>

            <div class="submenus-submenu py-16">
                <h6 class="text-lg px-16 submenus-submenu__title">Cell Phone</h6>
                <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                    <li>
                        <a href="shop.html">Samsung</a>
                    </li>
                    <li>
                        <a href="shop.html">Iphone</a>
                    </li>
                    <li>
                        <a href="shop.html">Vivo</a>
                    </li>
                    <li>
                        <a href="shop.html">Oppo</a>
                    </li>
                    <li>
                        <a href="shop.html">Itel</a>
                    </li>
                    <li>
                        <a href="shop.html">Realme</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="has-submenus-submenu">
            <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                <span>Wear</span>
                <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
            </a>

            <div class="submenus-submenu py-16">
                <h6 class="text-lg px-16 submenus-submenu__title">Wear</h6>
                <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                    <li>
                        <a href="shop.html">Samsung</a>
                    </li>
                    <li>
                        <a href="shop.html">Iphone</a>
                    </li>
                    <li>
                        <a href="shop.html">Vivo</a>
                    </li>
                    <li>
                        <a href="shop.html">Oppo</a>
                    </li>
                    <li>
                        <a href="shop.html">Itel</a>
                    </li>
                    <li>
                        <a href="shop.html">Realme</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="has-submenus-submenu">
            <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                <span>Computer</span>
                <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
            </a>

            <div class="submenus-submenu py-16">
                <h6 class="text-lg px-16 submenus-submenu__title">Computer</h6>
                <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                    <li>
                        <a href="shop.html">Samsung</a>
                    </li>
                    <li>
                        <a href="shop.html">Iphone</a>
                    </li>
                    <li>
                        <a href="shop.html">Vivo</a>
                    </li>
                    <li>
                        <a href="shop.html">Oppo</a>
                    </li>
                    <li>
                        <a href="shop.html">Itel</a>
                    </li>
                    <li>
                        <a href="shop.html">Realme</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="has-submenus-submenu">
            <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                <span>Headphone</span>
                <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
            </a>

            <div class="submenus-submenu py-16">
                <h6 class="text-lg px-16 submenus-submenu__title">Headphone</h6>
                <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                    <li>
                        <a href="shop.html">Samsung</a>
                    </li>
                    <li>
                        <a href="shop.html">Iphone</a>
                    </li>
                    <li>
                        <a href="shop.html">Vivo</a>
                    </li>
                    <li>
                        <a href="shop.html">Oppo</a>
                    </li>
                    <li>
                        <a href="shop.html">Itel</a>
                    </li>
                    <li>
                        <a href="shop.html">Realme</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="has-submenus-submenu">
            <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                <span>Smart Screen</span>
                <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
            </a>

            <div class="submenus-submenu py-16">
                <h6 class="text-lg px-16 submenus-submenu__title">Smart Screen</h6>
                <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                    <li>
                        <a href="shop.html">Samsung</a>
                    </li>
                    <li>
                        <a href="shop.html">Iphone</a>
                    </li>
                    <li>
                        <a href="shop.html">Vivo</a>
                    </li>
                    <li>
                        <a href="shop.html">Oppo</a>
                    </li>
                    <li>
                        <a href="shop.html">Itel</a>
                    </li>
                    <li>
                        <a href="shop.html">Realme</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="has-submenus-submenu">
            <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                <span>Smart Home</span>
                <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
            </a>

            <div class="submenus-submenu py-16">
                <h6 class="text-lg px-16 submenus-submenu__title">Smart Home</h6>
                <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                    <li>
                        <a href="shop.html">Samsung</a>
                    </li>
                    <li>
                        <a href="shop.html">Iphone</a>
                    </li>
                    <li>
                        <a href="shop.html">Vivo</a>
                    </li>
                    <li>
                        <a href="shop.html">Oppo</a>
                    </li>
                    <li>
                        <a href="shop.html">Itel</a>
                    </li>
                    <li>
                        <a href="shop.html">Realme</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="has-submenus-submenu">
            <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                <span>Digital Accessories</span>
                <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
            </a>

            <div class="submenus-submenu py-16">
                <h6 class="text-lg px-16 submenus-submenu__title">Digital Accessories</h6>
                <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                    <li>
                        <a href="shop.html">Samsung</a>
                    </li>
                    <li>
                        <a href="shop.html">Iphone</a>
                    </li>
                    <li>
                        <a href="shop.html">Vivo</a>
                    </li>
                    <li>
                        <a href="shop.html">Oppo</a>
                    </li>
                    <li>
                        <a href="shop.html">Itel</a>
                    </li>
                    <li>
                        <a href="shop.html">Realme</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="has-submenus-submenu">
            <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                <span> Value Added Services</span>
                <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
            </a>

            <div class="submenus-submenu py-16">
                <h6 class="text-lg px-16 submenus-submenu__title"> Value Added Services</h6>
                <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                    <li>
                        <a href="shop.html">Samsung</a>
                    </li>
                    <li>
                        <a href="shop.html">Iphone</a>
                    </li>
                    <li>
                        <a href="shop.html">Vivo</a>
                    </li>
                    <li>
                        <a href="shop.html">Oppo</a>
                    </li>
                    <li>
                        <a href="shop.html">Itel</a>
                    </li>
                    <li>
                        <a href="shop.html">Realme</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="has-submenus-submenu">
            <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                <span>Car Products</span>
                <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
            </a>

            <div class="submenus-submenu py-16">
                <h6 class="text-lg px-16 submenus-submenu__title">Car Products</h6>
                <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                    <li>
                        <a href="shop.html">Samsung</a>
                    </li>
                    <li>
                        <a href="shop.html">Iphone</a>
                    </li>
                    <li>
                        <a href="shop.html">Vivo</a>
                    </li>
                    <li>
                        <a href="shop.html">Oppo</a>
                    </li>
                    <li>
                        <a href="shop.html">Itel</a>
                    </li>
                    <li>
                        <a href="shop.html">Realme</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="has-submenus-submenu">
            <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                <span>Ecological Products</span>
                <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
            </a>

            <div class="submenus-submenu py-16">
                <h6 class="text-lg px-16 submenus-submenu__title">Ecological Products</h6>
                <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                    <li>
                        <a href="shop.html">Samsung</a>
                    </li>
                    <li>
                        <a href="shop.html">Iphone</a>
                    </li>
                    <li>
                        <a href="shop.html">Vivo</a>
                    </li>
                    <li>
                        <a href="shop.html">Oppo</a>
                    </li>
                    <li>
                        <a href="shop.html">Itel</a>
                    </li>
                    <li>
                        <a href="shop.html">Realme</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="has-submenus-submenu">
            <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                <span>Flat</span>
                <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
            </a>

            <div class="submenus-submenu py-16">
                <h6 class="text-lg px-16 submenus-submenu__title">Flat</h6>
                <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                    <li>
                        <a href="shop.html">Samsung</a>
                    </li>
                    <li>
                        <a href="shop.html">Iphone</a>
                    </li>
                    <li>
                        <a href="shop.html">Vivo</a>
                    </li>
                    <li>
                        <a href="shop.html">Oppo</a>
                    </li>
                    <li>
                        <a href="shop.html">Itel</a>
                    </li>
                    <li>
                        <a href="shop.html">Realme</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="has-submenus-submenu">
            <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                <span>Commercial Terminal</span>
                <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
            </a>

            <div class="submenus-submenu py-16">
                <h6 class="text-lg px-16 submenus-submenu__title">Commercial Terminal</h6>
                <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                    <li>
                        <a href="shop.html">Samsung</a>
                    </li>
                    <li>
                        <a href="shop.html">Iphone</a>
                    </li>
                    <li>
                        <a href="shop.html">Vivo</a>
                    </li>
                    <li>
                        <a href="shop.html">Oppo</a>
                    </li>
                    <li>
                        <a href="shop.html">Itel</a>
                    </li>
                    <li>
                        <a href="shop.html">Realme</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="has-submenus-submenu">
            <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                <span>Headphone</span>
                <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
            </a>

            <div class="submenus-submenu py-16">
                <h6 class="text-lg px-16 submenus-submenu__title">Headphone</h6>
                <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                    <li>
                        <a href="shop.html">Samsung</a>
                    </li>
                    <li>
                        <a href="shop.html">Iphone</a>
                    </li>
                    <li>
                        <a href="shop.html">Vivo</a>
                    </li>
                    <li>
                        <a href="shop.html">Oppo</a>
                    </li>
                    <li>
                        <a href="shop.html">Itel</a>
                    </li>
                    <li>
                        <a href="shop.html">Realme</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="has-submenus-submenu">
            <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                <span>Smart Screen</span>
                <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
            </a>

            <div class="submenus-submenu py-16">
                <h6 class="text-lg px-16 submenus-submenu__title">Smart Screen</h6>
                <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                    <li>
                        <a href="shop.html">Samsung</a>
                    </li>
                    <li>
                        <a href="shop.html">Iphone</a>
                    </li>
                    <li>
                        <a href="shop.html">Vivo</a>
                    </li>
                    <li>
                        <a href="shop.html">Oppo</a>
                    </li>
                    <li>
                        <a href="shop.html">Itel</a>
                    </li>
                    <li>
                        <a href="shop.html">Realme</a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</div>
                </div> 
                <div class="category d-none on-hover-item text-white flex-shrink-0 w-310">
                    <button type="button" class="category__button flex-align gap-8 fw-medium p-16 bg-main-600 text-white rounded-top h-100 w-100">
                        <span class="icon text-2xl d-md-flex d-none"><i class="ph ph-squares-four"></i></span>
                        <span class="d-sm-flex d-none">All</span>  Categories
                        <span class="arrow-icon text-xl d-flex ms-auto"><i class="ph ph-caret-down"></i></span>
                    </button>

                    <div class="responsive-dropdown on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper">
                        <button type="button" class="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"> <i class="ph ph-x"></i> </button>
                        <div class="logo px-16 d-lg-none d-block">
                            <a href="index.html" class="link">
                                <img src="assets/images/logo/logo.png" alt="Logo">
                            </a>
                        </div>
                        <ul class="scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto">
                            <li class="has-submenus-submenu">
                                <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                                    <span class="text-xl d-flex"><i class="ph ph-carrot"></i></span>
                                    <span>Vegetables &amp; Fruit</span>
                                    <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
                                </a>
    
                                <div class="submenus-submenu py-16">
                                    <h6 class="text-lg px-16 submenus-submenu__title">Vegetables &amp; Fruit</h6>
                                    <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                        <li>
                                            <a href="shop.html">Potato &amp; Tomato</a>
                                        </li>
                                        <li>
                                            <a href="shop.html">Cucumber &amp; Capsicum</a>
                                        </li>
                                        <li>
                                            <a href="shop.html">Leafy Vegetables</a>
                                        </li>
                                        <li>
                                            <a href="shop.html">Root Vegetables</a>
                                        </li>
                                        <li>
                                            <a href="shop.html">Beans &amp; Okra</a>
                                        </li>
                                        <li>
                                            <a href="shop.html">Cabbage &amp; Cauliflower</a>
                                        </li>
                                        <li>
                                            <a href="shop.html">Gourd &amp; Drumstick</a>
                                        </li>
                                        <li>
                                            <a href="shop.html">Specialty</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="has-submenus-submenu">
                                <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                                    <span class="text-xl d-flex"><i class="ph ph-brandy"></i></span>
                                    <span>Beverages</span>
                                    <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
                                </a>
                                <div class="submenus-submenu py-16">
                                    <h6 class="text-lg px-16 submenus-submenu__title">Beverages</h6>
                                    <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                        <li>
                                            <a href="shop.html">Soda &amp; Cocktail Mix </a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Sports &amp; Energy Drinks</a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Non Alcoholic Drinks</a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Packaged Water </a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Spring Water</a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Flavoured Water    </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="has-submenus-submenu">
                                <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                                    <span class="text-xl d-flex"><i class="ph ph-brandy"></i></span>
                                    <span>Meats &amp; Seafood</span>
                                    <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
                                </a>
                                <div class="submenus-submenu py-16">
                                    <h6 class="text-lg px-16 submenus-submenu__title">Meats &amp; Seafood</h6>
                                    <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                        <li>
                                            <a href="shop.html"> Fresh Meat </a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Frozen Meat</a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Marinated Meat</a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Fresh &amp; Frozen Meat</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="has-submenus-submenu">
                                <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                                    <span class="text-xl d-flex"><i class="ph ph-brandy"></i></span>
                                    <span>Breakfast &amp; Dairy</span>
                                    <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
                                </a>
                                <div class="submenus-submenu py-16">
                                    <h6 class="text-lg px-16 submenus-submenu__title">Breakfast &amp; Dairy</h6>
                                    <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                        <li>
                                            <a href="shop.html"> Oats &amp; Porridge</a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Kids Cereal</a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Muesli</a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Flakes</a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Granola &amp; Cereal Bars</a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Instant Noodles</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="has-submenus-submenu">
                                <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                                    <span class="text-xl d-flex"><i class="ph ph-brandy"></i></span>
                                    <span>Frozen Foods</span>
                                    <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
                                </a>
                                <div class="submenus-submenu py-16">
                                    <h6 class="text-lg px-16 submenus-submenu__title">Frozen Foods</h6>
                                    <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                        <li>
                                            <a href="shop.html"> Instant Noodles </a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Hakka Noodles</a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Cup Noodles</a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Vermicelli</a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Instant Pasta</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="has-submenus-submenu">
                                <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                                    <span class="text-xl d-flex"><i class="ph ph-brandy"></i></span>
                                    <span>Biscuits &amp; Snacks</span>
                                    <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
                                </a>
                                <div class="submenus-submenu py-16">
                                    <h6 class="text-lg px-16 submenus-submenu__title">Biscuits &amp; Snacks</h6>
                                    <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                        <li>
                                            <a href="shop.html"> Salted Biscuits </a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Marie, Health, Digestive</a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Cream Biscuits &amp; Wafers </a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Glucose &amp; Milk biscuits</a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Cookies</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="has-submenus-submenu">
                                <a href="javascript:void(0)" class="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0">
                                    <span class="text-xl d-flex"><i class="ph ph-brandy"></i></span>
                                    <span>Grocery &amp; Staples</span>
                                    <span class="icon text-md d-flex ms-auto"><i class="ph ph-caret-right"></i></span>
                                </a>
                                <div class="submenus-submenu py-16">
                                    <h6 class="text-lg px-16 submenus-submenu__title">Grocery &amp; Staples</h6>
                                    <ul class="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                        <li>
                                            <a href="shop.html"> Lemon, Ginger &amp; Garlic </a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Indian &amp; Exotic Herbs</a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Orangic Vegetables</a>
                                        </li>
                                        <li>
                                            <a href="shop.html">Orangic Fruits </a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Orangic Dry Fruits</a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Orangic Dals &amp; pulses</a>
                                        </li>
                                        <li>
                                            <a href="shop.html"> Orangic Millet &amp; Flours</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Category Dropdown End  -->
    
                <!-- Search Start  -->
                <form action="#" class="position-relative ms-20 max-w-870 w-100 d-md-block d-none">
                    <input type="text" class="form-control fw-medium placeholder-italic shadow-none bg-neutral-30 placeholder-fw-medium placeholder-light py-16 ps-30 pe-60 " placeholder="Search for products, categories or brands...">
                    <button type="submit" class="position-absolute top-50 translate-middle-y text-main-600 end-0 me-36 text-xl line-height-1">
                        <i class="ph-bold ph-magnifying-glass"></i>
                    </button>
                </form>
                <!-- Search End  -->
            </div>
             
            <!-- Header Middle Right start -->
           <div class="d-flex align-items-center gap-20-px flex-shrink-0">
                <a href="javascript:void(0)" class="flex-align gap-6 item-hover">
                    <span class="text-2xl text-heading d-flex position-relative me-6 mt-6 item-hover__text">
                        <i class="ph-bold ph-recycle"></i>
                        <span class="w-18 h-18 flex-center rounded-circle bg-success-600 text-white text-xs position-absolute top-n6 end-n4">2</span>
                    </span>
                    <span class="text-md text-neutral-500 item-hover__text fw-medium d-none d-lg-flex">Compare</span>
                </a>
                <a href="cart.html" class="flex-align gap-6 item-hover">
                    <span class="text-2xl text-heading d-flex position-relative me-6 mt-6 item-hover__text">
                        <i class="ph-bold ph-shopping-cart"></i>
                        <span class="w-18 h-18 flex-center rounded-circle bg-success-600 text-white text-xs position-absolute top-n6 end-n4">2</span>
                    </span>
                    <span class="text-md text-neutral-500 item-hover__text fw-medium d-none d-lg-flex">Cart</span>
                </a>
                <a href="javascript:void(0)" class="d-flex align-content-around gap-10 fw-medium text-main-600 py-14 px-24 bg-main-50 rounded-pill line-height-1 hover-bg-main-600 hover-text-white">
                    <span class="d-sm-flex d-none line-height-1"><i class="ph-bold ph-user"></i></span>
                    Account
                </a>
           </div>
            <!-- Header Middle Right End  -->
             
        </nav>
    </div>
</header>
<!-- ==================== Header End Here ==================== -->
  );
}
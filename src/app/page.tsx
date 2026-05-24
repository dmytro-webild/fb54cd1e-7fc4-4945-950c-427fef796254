"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumLargeSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Menu",          id: "menu"},
        {
          name: "Reviews",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Rosantos"
      button={{
        text: "Call Now",        href: "tel:0793666222"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars"}}
      title="The Good Side Of Food"
      description="Experience exquisite dining at The Rosantos Restaurant. Fresh, flavorful, and unforgettable."
      buttons={[
        {
          text: "View Menu",          href: "#menu"},
      ]}
      mediaItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E94Ghjx06bf9q1kdrpP5hjCvx0/uploaded-1779617886765-et8hrgjm.jpg?_wi=1",          imageAlt: "Restaurant Ambience"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E94Ghjx06bf9q1kdrpP5hjCvx0/uploaded-1779617886765-o8urqvcg.jpg?_wi=1",          imageAlt: "Signature Dessert"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E94Ghjx06bf9q1kdrpP5hjCvx0/uploaded-1779617886766-qitqlah9.jpg",          imageAlt: "Delicious Meal"},
      ]}
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Welcome to Rosantos"
      description="We believe in the good side of food. Located in the heart of Nairobi on Kaunda Street, we offer a unique blend of flavors and atmosphere."
      bulletPoints={[
        {
          title: "Fresh Ingredients",          description: "We use only the best locally sourced produce."},
        {
          title: "Great Atmosphere",          description: "Lush indoor greenery for a peaceful vibe."},
        {
          title: "Central Location",          description: "Located right in Nairobi's busy Kaunda St."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/part-home-kitchen-table-setting-with-gray-plates-bouquet-vase_169016-15715.jpg?_wi=2"
      imageAlt="Our lush restaurant interior"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Grilled Chicken Platter",          price: "Ksh 1,500",          variant: "Main",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E94Ghjx06bf9q1kdrpP5hjCvx0/uploaded-1779617886766-5ou0ge64.jpg?_wi=2"},
        {
          id: "p2",          name: "Chef's Special Burger",          price: "Ksh 1,200",          variant: "Main",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-burger-with-beef-meat-pickles-tomatoes-served-with-french-fries-sauces-black_140725-11866.jpg"},
        {
          id: "p3",          name: "Garden Fresh Salad",          price: "Ksh 1,000",          variant: "Starter",          imageSrc: "http://img.b2bpic.net/free-photo/grilled-lobster-tail-with-herbs-strawberries-black-plate_84443-94406.jpg"},
      ]}
      title="Our Signature Menu"
      description="Discover our carefully curated selection of local and international delights."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",          title: "Outdoor Seating",          description: "Relax and dine under the open sky.",          tag: "Available",          imageSrc: "http://img.b2bpic.net/free-photo/dining-table-modern-boho-chic-aesthetic-dining-room_53876-132813.jpg",          imageAlt: "Dining table in a modern boho chic aesthetic dining room"},
        {
          id: "f2",          title: "Family Friendly",          description: "Perfect for gatherings of all sizes.",          tag: "Welcome",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E94Ghjx06bf9q1kdrpP5hjCvx0/uploaded-1779617886765-et8hrgjm.jpg?_wi=2",          imageAlt: "Dining table in a modern boho chic aesthetic dining room"},
      ]}
      title="Why Choose Rosantos?"
      description="More than just a meal, we offer an experience."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Alice N.",          role: "Foodie",          company: "Local",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/senior-woman-smiling-restaurant_23-2149316809.jpg"},
        {
          id: "t2",          name: "John K.",          role: "Regular",          company: "Visitor",          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/person-getting-break-time-office_23-2149272019.jpg"},
      ]}
      kpiItems={[
        { value: "4.4", label: "Google Rating" },
        { value: "28", label: "Reviews" },
        { value: "5k+", label: "Satisfied Diners" },
      ]}
      title="What Our Guests Say"
      description="Real experiences from our lovely customers."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",          title: "Do you accept reservations?",          content: "Yes, we recommend calling ahead for large groups. Please contact us to secure your table."},
        {
          id: "q2",          title: "Is there outdoor seating?",          content: "Yes, we have a lovely outdoor seating area."},
      ]}
      buttons={[
          { text: "Book Now", href: "#contact" }
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Visit Us"
      description="We are located at Kaunda St, Nairobi. Drop by or give us a call."
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name" },
        { name: "email", type: "email", placeholder: "Your Email" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E94Ghjx06bf9q1kdrpP5hjCvx0/uploaded-1779617886766-s494wkxd.jpg?_wi=2"
      imageAlt="Our restaurant location"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Navigation",          items: [
            { label: "Home", href: "#hero" },
            { label: "Menu", href: "#menu" },
            { label: "Contact", href: "#contact" },
          ],
        },
      ]}
      logoText="Rosantos"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
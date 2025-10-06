import "./App.css";
import { Accordion } from "./Accordion";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "All our chairs are assembled in our central factory using locally sourced materials.",
  },
  {
    title: "Do you offer international shipping?",
    text: "Yes, we ship to over 50 countries worldwide with reliable courier partners.",
  },
  {
    title: "What materials are used in the chairs?",
    text: "We use sustainably sourced wood, premium metal frames, and eco-friendly fabrics.",
  },
  {
    title: "Can I customize the color or fabric?",
    text: "Absolutely! You can choose from a range of colors and materials during checkout.",
  },
  {
    title: "How long does delivery usually take?",
    text: "Standard delivery takes 5–7 business days within the country and 10–14 days internationally.",
  },
  {
    title: "Do the chairs come with a warranty?",
    text: "Yes, every chair includes a 2-year warranty covering structural defects and manufacturing issues.",
  },
  {
    title: "What is your return policy?",
    text: "We offer a 30-day return policy for unused items in their original packaging.",
  },
  {
    title: "How do I clean and maintain the chairs?",
    text: "Use a soft damp cloth for regular cleaning and avoid harsh chemical cleaners.",
  },
  {
    title: "Do you provide bulk or corporate discounts?",
    text: "Yes, we offer special pricing for large or corporate orders. Please contact sales for details.",
  },
  {
    title: "Is assembly required after delivery?",
    text: "Most chairs come pre-assembled, but some models may require minimal setup with provided tools.",
  },
];

export default function App() {
  return (
    <>
      <Accordion data={faqs} />
    </>
  );
}

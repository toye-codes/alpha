import '../index.css'
import CapabilitiesCard from "../components/cards/CapabilitiesCard"
import LimitationsCard from "../components/cards/LimitationCard";
import PromptsCard from "../components/cards/PromptsCard";


const LargeSreen = () => {
  return (
    <section className='flex gap-3'>
      <div>
        <PromptsCard />
      </div>
      <div>
        <CapabilitiesCard />
      </div>
      <div>
        <LimitationsCard />
      </div>
    </section>
  );
}

export default LargeSreen

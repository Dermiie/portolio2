import { HiArrowRight, HiOutlineDownload } from 'react-icons/hi';
import Button from './Button';
import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 py-28">
        <p className="flex flex-col items-start text-sm tracking-wider uppercase">
          Available for opportunites
        </p>
        <main>
          <p className="text-6xl font-extrabold text-center font-display text-primary-900">
            Let&apos;s build <br /> something <br />
            <span>remarkable</span>
          </p>
        </main>
        <div className="flex items-end justify-end">
          <div className="flex items-end gap-2">
            <Button type={'solid'}>
              <div className="flex items-center justify-center gap-2">
                <p>Get in Touch</p>
                <span>
                  <HiArrowRight></HiArrowRight>
                </span>
              </div>
            </Button>
            <Button type={'primary'}>
              {' '}
              <div className="flex items-center justify-center gap-2">
                <span>
                  <HiOutlineDownload></HiOutlineDownload>
                </span>
                <p>Download CV</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <footer className="flex justify-between px-12 border-t-[0.8px] border-primary-800">
        <div className="flex items-center justify-center">
          <p className="py-8"> &copy;2026 Demilade Oyeniyi 🧙‍♂️</p>
        </div>
        <SocialLinks />
      </footer>
    </>
  );
}

export default Footer;

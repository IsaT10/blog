import { useState } from 'react';
import { toast } from 'react-toastify';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleEmail = (e) => {
    const email = e.target.value;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmail('');
    } else {
      setEmail(email);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email.length > 0) {
      e.target.reset();
      toast.success("Success! You're All Set to Stay Informed ");
    }
  };
  return (
    <div className="bg-primary-color my-10 px-5 mx-auto h-[230px] sm:h-[250px] md:h-[300px] flex items-center justify-center">
      <div className="flex flex-col gap-4 w-full sm:w-[450px] md:w-[500px]">
        <h3 className="text-center font-semibold uppercase tracking-widest text-2xl sm:text-3xl md:text-4xl text-white">
          News letter
        </h3>
        <p className="text-cyan-200 tracking-tight md:tracking-wide text-center">
          Keep up our latest blogs. Subscribe our newsletter
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex-col flex sm:flex-row items-center justify-between gap-4 sm:gap-3"
        >
          <input
            className="rounded-sm border-none px-3 py-1.5 w-full sm:flex-1"
            type="email"
            name="email"
            required
            placeholder="Email address"
            onChange={handleEmail}
          />
          <button
            // onClick={handleSubscribe}
            className="bg-cyan-100 px-4 text-base py-1.5 rounded-sm text-stone-700 font-semibold uppercase"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;

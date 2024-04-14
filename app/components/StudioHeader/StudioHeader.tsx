import Link from 'next/link';
import { IoReturnDownBack } from 'react-icons/io5';
import Image from 'next/image';

const StudioHeader = (props: any) => {
  return (
    <div>
      <div className="p-5 bg-black text-gray-100 flex items-center justify-between">
        <Link
          href={'/'}
          className="flex items-center gap-3 font-semibold hover:text-blue-600 duration-200"
        >
          <IoReturnDownBack className="text-2xl" />
          Go to Website
        </Link>
        <Link href="/">
          <Image
            src="/images/logo/logo.svg"
            alt="logo"
            width={140}
            height={30}
          />
        </Link>
        <p className="text-sm">Houvincity Blog Studio</p>
      </div>
      {props.renderDefault(props)}
    </div>
  );
};

export default StudioHeader;

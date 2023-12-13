import { useTranslation } from 'react-i18next';

function Exxample({ long_description }) {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t(long_description)}</p>
    </div>
  );
}

export default Exxample;

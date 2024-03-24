const useDate = ({ settings }) => {
  const { Spider_app_date_format } = settings;

  const dateFormat = Spider_app_date_format;

  return {
    dateFormat,
  };
};

module.exports = useDate;

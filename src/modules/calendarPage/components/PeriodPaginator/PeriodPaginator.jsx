import { Button } from "shared/components";
import { usePeriodTitle } from "shared/hooks/usePeriodTitle";
import { sprite } from "shared/icons";
import * as changeDatebyPeriod from "../../helpers/changeDateByPeriod";
import s from "./PeriodPaginator.module.scss";

export const PeriodPaginator = ({ periodType, date, setDate }) => {
  const periodTitle = usePeriodTitle(periodType, date);

  const handlePrevPeriod = () => {
    const prevPeriodDate = changeDatebyPeriod.toPrev(date, periodType);
    setDate(prevPeriodDate);
  };

  const handleNextPeriod = () => {
    const prevPeriodDate = changeDatebyPeriod.toNext(date, periodType);
    setDate(prevPeriodDate);
  };

  return (
    <div className={s.wrapper}>
      <p className={s.periodDate}>{periodTitle}</p>
      <div className={s.btnWrapper}>
        <Button className={s.btn} onClick={handlePrevPeriod}>
          <svg>
            <use href={sprite + "#icon-chevron-left"}></use>
          </svg>
        </Button>
        <Button className={s.btn} onClick={handleNextPeriod}>
          <svg>
            <use href={sprite + "#icon-chevron-right"}></use>
          </svg>
        </Button>
      </div>
    </div>
  );
};

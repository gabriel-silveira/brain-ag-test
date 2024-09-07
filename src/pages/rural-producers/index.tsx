import React, {useEffect, useState} from 'react';
import RuralProducersTable from "../../components/tables/rural-producers";
import RemoveRuralProducerDialog from "../../components/dialogs/rural-producer/remove";
import {useDispatch, useSelector} from "react-redux";
import {IRuralProducer} from "../../_interfaces/rural_producer";
import {removeRuralProducer} from "../../store/rural-producer/actions";
import BeatLoader from "react-spinners/BeatLoader";

function RuralProducersPage() {
  const {
    deleteIndex,
    ruralProducers,
  }: {
    deleteIndex: number,
    ruralProducers: IRuralProducer[],
    // @ts-ignore
  } = useSelector((rootReducer) => rootReducer.ruralProducerReducer);

  useEffect(() => {
    if (deleteIndex !== undefined) {
      const ruralProducer = ruralProducers.find(
        (rp, index) => index === deleteIndex
      );

      if (ruralProducer !== undefined) {
        setData((prev) => ({
          ...prev,
          showRemoveDialog: true,
          ruralProducer,
          index: deleteIndex,
        }));
      }
    }
  }, [deleteIndex]);

  let [loading, setLoading] = useState(false);

  const [data, setData] = useState<{
    showRemoveDialog: boolean,
    ruralProducer?: IRuralProducer,
    index: number,
  }>({
    showRemoveDialog: false,
    ruralProducer: undefined,
    index: 0,
  });

  const dispatch = useDispatch();

  function startRemovingRuralProducer(remove: boolean) {
    setLoading(() => true);

    const updatedRuralProducers: IRuralProducer[] = [];

    let i = 0;

    for (const currentRuralProducer of ruralProducers) {
      if (!remove || (deleteIndex !== undefined && i !== deleteIndex)) {
        updatedRuralProducers.push(currentRuralProducer);
      }

      i += 1;
    }

    dispatch(removeRuralProducer([...updatedRuralProducers]));

    setData((prev) => ({
      ...prev,
      showRemoveDialog: false,
      ruralProducer: undefined,
      index: 0,
    }));

    setLoading(() => false);
  }

  return (
    <div>
      {loading ? (
        <div className="w-full flex justify-center pt-5 pb-5">
          <BeatLoader
            color="#00AA00"
            loading={loading}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <RuralProducersTable/>
      )}

      <RemoveRuralProducerDialog
        visible={data.showRemoveDialog}
        ruralProducer={data.ruralProducer}
        index={data.index}
        onClose={($event) => startRemovingRuralProducer($event)}
      />
    </div>
  )
}

export default RuralProducersPage;

import React, { useEffect, useRef, useState } from 'react';
import { CarListModel } from '../../@types';
import queryString from 'query-string';
import requester from '../../services/requester';
import services from '../../services/services';

import {
  Container
} from './styles';

export function MyCars() {
  const [cars, setCars] = useState<CarListModel[]>([]);
  const [loading, setLoading] = useState(true);

  const isMounted = useRef(true);

  async function getCars() {
    const user_id = 1;
    const endpointParams = queryString.stringify({
      user_id
    });

    const service = {
      ...services.getSchedulesByUser,
      endpoint: services.getSchedulesByUser.endpoint.concat(endpointParams),
    };

    const result = await requester(service);

    if (result.success) {
      setCars(result.data);
    } else {
      console.log("Error: ", result.error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getCars();
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Container>

    </Container>
  );
};
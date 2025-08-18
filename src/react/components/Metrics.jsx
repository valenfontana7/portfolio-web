import React, { useEffect } from 'react';
import { metrics } from '../../../js/modules/metricsData.js';
import { refreshAnimations } from '../../../js/modules/animations.js';

export default function Metrics() {
  useEffect(() => {
    // ensure reveal animations pick up these elements
    try {
      refreshAnimations();
    } catch (err) {
      // noop
    }
  }, []);

  return (
    <>
      {metrics.map(m => (
        <div className="metric reveal" data-animate="fade-up" data-metric={m.id} key={m.id}>
          <span className="metric__value">{m.value}</span>
          <span className="metric__label">{m.label}</span>
        </div>
      ))}
    </>
  );
}

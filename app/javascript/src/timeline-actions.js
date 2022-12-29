// Timeline modification functions
export function cloneTimeline(timeline) {
  return JSON.parse(JSON.stringify(timeline));
}

export function nextTimelineItemId(timeline) {
  return Object.values(timeline.script.sequences).reduce((seqMax, statSeq) => Math.max(
    seqMax,
    statSeq.sequence.reduce((itemMax, item) => Math.max(itemMax, item.timelineId), 0)
  ), 0) + 1;
}
export function timelineSeq(timeline, stationId) {
  return (timeline
    && timeline.script
    && timeline.script.sequences
    && timeline.script.sequences[stationId]
    && timeline.script.sequences[stationId].sequence) || [];
}
export function timelineSeqInsertItem(timeline, stationId, itemIndex, exhibit) {
  const newTimeline = cloneTimeline(timeline);
  if (newTimeline.script === null) {
    newTimeline.script = {sequences: {}};
  }
  if (newTimeline.script.sequences[stationId] === undefined) {
    newTimeline.script.sequences[stationId] = {
      sequence: [],
    };
  }

  const newItemId = nextTimelineItemId(newTimeline);
  newTimeline.script.sequences[stationId].sequence.splice(itemIndex, 0,
    Object.assign({}, exhibit, {timelineId: newItemId}));

  return newTimeline;
}

export function timelineSeqRemoveItem(timeline, stationId, itemIndex) {
  if (timeline.script.sequences[stationId] === undefined) {
    throw new Error(`Can't remove item from sequence for station ${stationId}. Station not found in timeline ${timeline.id}`);
  }
  if (timeline.script.sequences[stationId].sequence[itemIndex] === undefined) {
    throw new Error(`Can't remove item ${itemIndex} from sequence for station ${stationId}. Item not found in sequence in timeline ${timeline.id}`);
  }
  const newTimeline = cloneTimeline(timeline);
  newTimeline.script.sequences[stationId].sequence.splice(itemIndex, 1);

  return newTimeline;
}

export function timelineSeqMoveItem(timeline, stationId, itemIndex, newItemIndex) {
  if (timeline.script.sequences[stationId] === undefined) {
    throw new Error(`Can't remove item from sequence for station ${stationId}. Station not found in timeline ${timeline.id}`);
  }
  if (timeline.script.sequences[stationId].sequence[itemIndex] === undefined) {
    throw new Error(`Can't move item ${itemIndex} from sequence for station ${stationId}. Item not found in sequence in timeline ${timeline.id}`);
  }
  const newTimeline = cloneTimeline(timeline);
  const item = newTimeline.script.sequences[stationId].sequence.splice(itemIndex, 1)[0];
  newTimeline.script.sequences[stationId].sequence.splice(newItemIndex, 0, item);

  return newTimeline;
}

export function timelineMoveItem(timeline, stationId, itemIndex, newStationId, newItemIndex) {
  const newTimeline = cloneTimeline(timeline);
  const item = newTimeline.script.sequences[stationId].sequence.splice(itemIndex, 1)[0];
  if (newTimeline.script === null) {
    newTimeline.script = {sequences: {}};
  }
  if (newTimeline.script.sequences === undefined) {
    newTimeline.script.sequences = {};
  }
  if (newTimeline.script.sequences[newStationId] === undefined) {
    newTimeline.script.sequences[newStationId] = {
      sequence: [],
    };
  }
  newTimeline.script.sequences[newStationId].sequence.splice(newItemIndex, 0, item);

  return newTimeline;
}

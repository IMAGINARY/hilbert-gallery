export function exhibitIdToDraggableId(containerType, containerId, exhibitId, sequence) {
  return `${containerType}-${containerId}-${exhibitId}-${sequence}`;
}

export function exhibitIdFromDraggableId(draggableId) {
  const parts = draggableId.split('-');
  return parts[2];
}

function saveSubject() {
    const oldSubject = currentSubject.textContent;
    const newSubject = subjectInput.value;
    currentSubject.textContent = newSubject;
    editModal.style.display = "none";
    addNotification(`Changed "${oldSubject}" to "${newSubject}"`);
    saveData();
    loadData(); // Add this line to immediately refresh the timetable display
}
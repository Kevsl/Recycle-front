export const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
}

const searchIcon =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yMjUuNDc0LDBDMTAxLjE1MSwwLDAsMTAxLjE1MSwwLDIyNS40NzRjMCwxMjQuMzMsMTAxLjE1MSwyMjUuNDc0LDIyNS40NzQsMjI1LjQ3NA0KCQkJYzEyNC4zMywwLDIyNS40NzQtMTAxLjE0NCwyMjUuNDc0LTIyNS40NzRDNDUwLjk0OCwxMDEuMTUxLDM0OS44MDQsMCwyMjUuNDc0LDB6IE0yMjUuNDc0LDQwOS4zMjMNCgkJCWMtMTAxLjM3MywwLTE4My44NDgtODIuNDc1LTE4My44NDgtMTgzLjg0OFMxMjQuMTAxLDQxLjYyNiwyMjUuNDc0LDQxLjYyNnMxODMuODQ4LDgyLjQ3NSwxODMuODQ4LDE4My44NDgNCgkJCVMzMjYuODQ3LDQwOS4zMjMsMjI1LjQ3NCw0MDkuMzIzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTA1LjkwMiw0NzYuNDcyTDM4Ni41NzQsMzU3LjE0NGMtOC4xMzEtOC4xMzEtMjEuMjk5LTguMTMxLTI5LjQzLDBjLTguMTMxLDguMTI0LTguMTMxLDIxLjMwNiwwLDI5LjQzbDExOS4zMjgsMTE5LjMyOA0KCQkJYzQuMDY1LDQuMDY1LDkuMzg3LDYuMDk4LDE0LjcxNSw2LjA5OGM1LjMyMSwwLDEwLjY0OS0yLjAzMywxNC43MTUtNi4wOThDNTE0LjAzMyw0OTcuNzc4LDUxNC4wMzMsNDg0LjU5Niw1MDUuOTAyLDQ3Ni40NzJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';

const arrowTopIcon =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjEzLjMzMyAyMTMuMzMzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMTMuMzMzIDIxMy4zMzM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cG9seWdvbiBwb2ludHM9IjAsNTMuMzMzIDEwNi42NjcsMTYwIDIxMy4zMzMsNTMuMzMzIAkJIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';

const arrowrightIcon =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMiA1MTIuMDAyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAyIDUxMi4wMDI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzg4LjQyNSwyNDEuOTUxTDE1MS42MDksNS43OWMtNy43NTktNy43MzMtMjAuMzIxLTcuNzItMjguMDY3LDAuMDRjLTcuNzQsNy43NTktNy43MiwyMC4zMjgsMC4wNCwyOC4wNjdsMjIyLjcyLDIyMi4xMDUNCgkJCUwxMjMuNTc0LDQ3OC4xMDZjLTcuNzU5LDcuNzQtNy43NzksMjAuMzAxLTAuMDQsMjguMDYxYzMuODgzLDMuODksOC45Nyw1LjgzNSwxNC4wNTcsNS44MzVjNS4wNzQsMCwxMC4xNDEtMS45MzIsMTQuMDE3LTUuNzk1DQoJCQlsMjM2LjgxNy0yMzYuMTU1YzMuNzM3LTMuNzE4LDUuODM0LTguNzc4LDUuODM0LTE0LjA1UzM5Mi4xNTYsMjQ1LjY3NiwzODguNDI1LDI0MS45NTF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';

const heart =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDEyLjczNSA0MTIuNzM1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MTIuNzM1IDQxMi43MzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjk1LjcwNiwzNS41MjJDMjk1LjcwNiwzNS41MjIsMjk1LjcwNiwzNS41MjIsMjk1LjcwNiwzNS41MjJjLTM0LjQzLTAuMTg0LTY3LjE2MSwxNC45MzctODkuMzM5LDQxLjI3Mw0KCQkJYy0yMi4wMzktMjYuNTE2LTU0Ljg2MS00MS42OC04OS4zMzktNDEuMjczQzUyLjM5NSwzNS41MjIsMCw4Ny45MTcsMCwxNTIuNTVDMCwyNjMuMzEsMTkzLjMwNiwzNzEuNDU2LDIwMS4xNDMsMzc1LjYzNg0KCQkJYzMuMTYyLDIuMTEzLDcuMjg2LDIuMTEzLDEwLjQ0OSwwYzcuODM3LTQuMTgsMjAxLjE0My0xMTAuNzU5LDIwMS4xNDMtMjIzLjA4NkM0MTIuNzM1LDg3LjkxNywzNjAuMzM5LDM1LjUyMiwyOTUuNzA2LDM1LjUyMnoNCgkJCSBNMjA2LjM2NywzNTQuNzM4QzE3Ni4wNjUsMzM2Ljk3NSwyMC44OTgsMjQyLjQxMiwyMC44OTgsMTUyLjU1YzAtNTMuMDkxLDQzLjAzOS05Ni4xMzEsOTYuMTMxLTk2LjEzMQ0KCQkJYzMyLjUxMi0wLjQyNyw2Mi45MzgsMTUuOTcyLDgwLjQ1Nyw0My4zNjNjMy41NTcsNC45MDUsMTAuNDE4LDUuOTk4LDE1LjMyMywyLjQ0YzAuOTM3LTAuNjgsMS43NjEtMS41MDMsMi40NC0yLjQ0DQoJCQljMjkuMDU1LTQ0LjQzNSw4OC42MzEtNTYuOTAzLDEzMy4wNjYtMjcuODQ4YzI3LjIwMiwxNy43ODcsNDMuNTc1LDQ4LjExNCw0My41MjEsODAuNjE1DQoJCQlDMzkxLjgzNywyNDMuNDU2LDIzNi42NjksMzM3LjQ5NywyMDYuMzY3LDM1NC43Mzh6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';

const instaIcon =
  'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zMDUgMjU2YzAgMjcuMDYyNS0yMS45Mzc1IDQ5LTQ5IDQ5cy00OS0yMS45Mzc1LTQ5LTQ5IDIxLjkzNzUtNDkgNDktNDkgNDkgMjEuOTM3NSA0OSA0OXptMCAwIi8+PHBhdGggZD0ibTM3MC41OTM3NSAxNjkuMzA0Njg4Yy0yLjM1NTQ2OS02LjM4MjgxMy02LjExMzI4MS0xMi4xNjAxNTctMTAuOTk2MDk0LTE2LjkwMjM0NC00Ljc0MjE4Ny00Ljg4MjgxMy0xMC41MTU2MjUtOC42NDA2MjUtMTYuOTAyMzQ0LTEwLjk5NjA5NC01LjE3OTY4Ny0yLjAxMTcxOS0xMi45NjA5MzctNC40MDYyNS0yNy4yOTI5NjgtNS4wNTg1OTQtMTUuNTAzOTA2LS43MDcwMzEtMjAuMTUyMzQ0LS44NTkzNzUtNTkuNDAyMzQ0LS44NTkzNzUtMzkuMjUzOTA2IDAtNDMuOTAyMzQ0LjE0ODQzOC01OS40MDIzNDQuODU1NDY5LTE0LjMzMjAzMS42NTYyNS0yMi4xMTcxODcgMy4wNTA3ODEtMjcuMjkyOTY4IDUuMDYyNS02LjM4NjcxOSAyLjM1NTQ2OS0xMi4xNjQwNjMgNi4xMTMyODEtMTYuOTAyMzQ0IDEwLjk5NjA5NC00Ljg4MjgxMyA0Ljc0MjE4Ny04LjY0MDYyNSAxMC41MTU2MjUtMTEgMTYuOTAyMzQ0LTIuMDExNzE5IDUuMTc5Njg3LTQuNDA2MjUgMTIuOTY0ODQzLTUuMDU4NTk0IDI3LjI5Njg3NC0uNzA3MDMxIDE1LjUtLjg1OTM3NSAyMC4xNDg0MzgtLjg1OTM3NSA1OS40MDIzNDQgMCAzOS4yNS4xNTIzNDQgNDMuODk4NDM4Ljg1OTM3NSA1OS40MDIzNDQuNjUyMzQ0IDE0LjMzMjAzMSAzLjA0Njg3NSAyMi4xMTMyODEgNS4wNTg1OTQgMjcuMjkyOTY5IDIuMzU5Mzc1IDYuMzg2NzE5IDYuMTEzMjgxIDEyLjE2MDE1NiAxMC45OTYwOTQgMTYuOTAyMzQzIDQuNzQyMTg3IDQuODgyODEzIDEwLjUxNTYyNCA4LjY0MDYyNiAxNi45MDIzNDMgMTAuOTk2MDk0IDUuMTc5Njg4IDIuMDE1NjI1IDEyLjk2NDg0NCA0LjQxMDE1NiAyNy4yOTY4NzUgNS4wNjI1IDE1LjUuNzA3MDMyIDIwLjE0NDUzMi44NTU0NjkgNTkuMzk4NDM4Ljg1NTQ2OSAzOS4yNTc4MTIgMCA0My45MDYyNS0uMTQ4NDM3IDU5LjQwMjM0NC0uODU1NDY5IDE0LjMzMjAzMS0uNjUyMzQ0IDIyLjExNzE4Ny0zLjA0Njg3NSAyNy4yOTY4NzQtNS4wNjI1IDEyLjgyMDMxMy00Ljk0NTMxMiAyMi45NTMxMjYtMTUuMDc4MTI1IDI3Ljg5ODQzOC0yNy44OTg0MzcgMi4wMTE3MTktNS4xNzk2ODggNC40MDYyNS0xMi45NjA5MzggNS4wNjI1LTI3LjI5Mjk2OS43MDcwMzEtMTUuNTAzOTA2Ljg1NTQ2OS0yMC4xNTIzNDQuODU1NDY5LTU5LjQwMjM0NCAwLTM5LjI1MzkwNi0uMTQ4NDM4LTQzLjkwMjM0NC0uODU1NDY5LTU5LjQwMjM0NC0uNjUyMzQ0LTE0LjMzMjAzMS0zLjA0Njg3NS0yMi4xMTcxODctNS4wNjI1LTI3LjI5Njg3NHptLTExNC41OTM3NSAxNjIuMTc5Njg3Yy00MS42OTE0MDYgMC03NS40ODgyODEtMzMuNzkyOTY5LTc1LjQ4ODI4MS03NS40ODQzNzVzMzMuNzk2ODc1LTc1LjQ4NDM3NSA3NS40ODgyODEtNzUuNDg0Mzc1YzQxLjY4NzUgMCA3NS40ODQzNzUgMzMuNzkyOTY5IDc1LjQ4NDM3NSA3NS40ODQzNzVzLTMzLjc5Njg3NSA3NS40ODQzNzUtNzUuNDg0Mzc1IDc1LjQ4NDM3NXptNzguNDY4NzUtMTM2LjMxMjVjLTkuNzQyMTg4IDAtMTcuNjQwNjI1LTcuODk4NDM3LTE3LjY0MDYyNS0xNy42NDA2MjVzNy44OTg0MzctMTcuNjQwNjI1IDE3LjY0MDYyNS0xNy42NDA2MjUgMTcuNjQwNjI1IDcuODk4NDM3IDE3LjY0MDYyNSAxNy42NDA2MjVjLS4wMDM5MDYgOS43NDIxODgtNy44OTg0MzcgMTcuNjQwNjI1LTE3LjY0MDYyNSAxNy42NDA2MjV6bTAgMCIvPjxwYXRoIGQ9Im0yNTYgMGMtMTQxLjM2MzI4MSAwLTI1NiAxMTQuNjM2NzE5LTI1NiAyNTZzMTE0LjYzNjcxOSAyNTYgMjU2IDI1NiAyNTYtMTE0LjYzNjcxOSAyNTYtMjU2LTExNC42MzY3MTktMjU2LTI1Ni0yNTZ6bTE0Ni4xMTMyODEgMzE2LjYwNTQ2OWMtLjcxMDkzNyAxNS42NDg0MzctMy4xOTkyMTkgMjYuMzMyMDMxLTYuODMyMDMxIDM1LjY4MzU5My03LjYzNjcxOSAxOS43NDYwOTQtMjMuMjQ2MDk0IDM1LjM1NTQ2OS00Mi45OTIxODggNDIuOTkyMTg4LTkuMzQ3NjU2IDMuNjMyODEyLTIwLjAzNTE1NiA2LjExNzE4OC0zNS42Nzk2ODcgNi44MzIwMzEtMTUuNjc1NzgxLjcxNDg0NC0yMC42ODM1OTQuODg2NzE5LTYwLjYwNTQ2OS44ODY3MTktMzkuOTI1NzgxIDAtNDQuOTI5Njg3LS4xNzE4NzUtNjAuNjA5Mzc1LS44ODY3MTktMTUuNjQ0NTMxLS43MTQ4NDMtMjYuMzMyMDMxLTMuMTk5MjE5LTM1LjY3OTY4Ny02LjgzMjAzMS05LjgxMjUtMy42OTE0MDYtMTguNjk1MzEzLTkuNDc2NTYyLTI2LjAzOTA2My0xNi45NTcwMzEtNy40NzY1NjItNy4zMzk4NDQtMTMuMjYxNzE5LTE2LjIyNjU2My0xNi45NTMxMjUtMjYuMDM1MTU3LTMuNjMyODEyLTkuMzQ3NjU2LTYuMTIxMDk0LTIwLjAzNTE1Ni02LjgzMjAzMS0zNS42Nzk2ODctLjcyMjY1Ni0xNS42Nzk2ODctLjg5MDYyNS0yMC42ODc1LS44OTA2MjUtNjAuNjA5Mzc1cy4xNjc5NjktNDQuOTI5Njg4Ljg4NjcxOS02MC42MDU0NjljLjcxMDkzNy0xNS42NDg0MzcgMy4xOTUzMTItMjYuMzMyMDMxIDYuODI4MTI1LTM1LjY4MzU5MyAzLjY5MTQwNi05LjgwODU5NCA5LjQ4MDQ2OC0xOC42OTUzMTMgMTYuOTYwOTM3LTI2LjAzNTE1NyA3LjMzOTg0NC03LjQ4MDQ2OSAxNi4yMjY1NjMtMTMuMjY1NjI1IDI2LjAzNTE1Ny0xNi45NTcwMzEgOS4zNTE1NjItMy42MzI4MTIgMjAuMDM1MTU2LTYuMTE3MTg4IDM1LjY4MzU5My02LjgzMjAzMSAxNS42NzU3ODEtLjcxNDg0NCAyMC42ODM1OTQtLjg4NjcxOSA2MC42MDU0NjktLjg4NjcxOXM0NC45Mjk2ODguMTcxODc1IDYwLjYwNTQ2OS44OTA2MjVjMTUuNjQ4NDM3LjcxMDkzNyAyNi4zMzIwMzEgMy4xOTUzMTMgMzUuNjgzNTkzIDYuODI0MjE5IDkuODA4NTk0IDMuNjkxNDA2IDE4LjY5NTMxMyA5LjQ4MDQ2OCAyNi4wMzkwNjMgMTYuOTYwOTM3IDcuNDc2NTYzIDcuMzQzNzUgMTMuMjY1NjI1IDE2LjIyNjU2MyAxNi45NTMxMjUgMjYuMDM1MTU3IDMuNjM2NzE5IDkuMzUxNTYyIDYuMTIxMDk0IDIwLjAzNTE1NiA2LjgzNTkzOCAzNS42ODM1OTMuNzE0ODQzIDE1LjY3NTc4MS44ODI4MTIgMjAuNjgzNTk0Ljg4MjgxMiA2MC42MDU0NjlzLS4xNjc5NjkgNDQuOTI5Njg4LS44ODY3MTkgNjAuNjA1NDY5em0wIDAiLz48L3N2Zz4=';

const facebookIcon =
  'data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTUxMiAyNTZjMC0xNDEuNC0xMTQuNi0yNTYtMjU2LTI1NnMtMjU2IDExNC42LTI1NiAyNTYgMTE0LjYgMjU2IDI1NiAyNTZjMS41IDAgMyAwIDQuNS0uMXYtMTk5LjJoLTU1di02NC4xaDU1di00Ny4yYzAtNTQuNyAzMy40LTg0LjUgODIuMi04NC41IDIzLjQgMCA0My41IDEuNyA0OS4zIDIuNXY1Ny4yaC0zMy42Yy0yNi41IDAtMzEuNyAxMi42LTMxLjcgMzEuMXY0MC44aDYzLjVsLTguMyA2NC4xaC01NS4ydjE4OS41YzEwNy0zMC43IDE4NS4zLTEyOS4yIDE4NS4zLTI0Ni4xeiIvPjwvc3ZnPg==';

const youtubeIcon =
  'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yMjQuMTEzMjgxIDMwMy45NjA5MzggODMuMjczNDM4LTQ3Ljk2MDkzOC04My4yNzM0MzgtNDcuOTYwOTM4em0wIDAiLz48cGF0aCBkPSJtMjU2IDBjLTE0MS4zNjMyODEgMC0yNTYgMTE0LjYzNjcxOS0yNTYgMjU2czExNC42MzY3MTkgMjU2IDI1NiAyNTYgMjU2LTExNC42MzY3MTkgMjU2LTI1Ni0xMTQuNjM2NzE5LTI1Ni0yNTYtMjU2em0xNTkuOTYwOTM4IDI1Ni4yNjE3MTlzMCA1MS45MTc5NjktNi41ODU5MzggNzYuOTUzMTI1Yy0zLjY5MTQwNiAxMy43MDMxMjUtMTQuNDk2MDk0IDI0LjUwNzgxMi0yOC4xOTkyMTkgMjguMTk1MzEyLTI1LjAzNTE1NiA2LjU4OTg0NC0xMjUuMTc1NzgxIDYuNTg5ODQ0LTEyNS4xNzU3ODEgNi41ODk4NDRzLTk5Ljg3ODkwNiAwLTEyNS4xNzU3ODEtNi44NTE1NjJjLTEzLjcwMzEyNS0zLjY4NzUtMjQuNTA3ODEzLTE0LjQ5NjA5NC0yOC4xOTkyMTktMjguMTk5MjE5LTYuNTg5ODQ0LTI0Ljc2OTUzMS02LjU4OTg0NC03Ni45NDkyMTktNi41ODk4NDQtNzYuOTQ5MjE5czAtNTEuOTE0MDYyIDYuNTg5ODQ0LTc2Ljk0OTIxOWMzLjY4NzUtMTMuNzAzMTI1IDE0Ljc1NzgxMi0yNC43NzM0MzcgMjguMTk5MjE5LTI4LjQ2MDkzNyAyNS4wMzUxNTYtNi41ODk4NDQgMTI1LjE3NTc4MS02LjU4OTg0NCAxMjUuMTc1NzgxLTYuNTg5ODQ0czEwMC4xNDA2MjUgMCAxMjUuMTc1NzgxIDYuODUxNTYyYzEzLjcwMzEyNSAzLjY4NzUgMjQuNTA3ODEzIDE0LjQ5NjA5NCAyOC4xOTkyMTkgMjguMTk5MjE5IDYuODUxNTYyIDI1LjAzNTE1NyA2LjU4NTkzOCA3Ny4yMTA5MzggNi41ODU5MzggNzcuMjEwOTM4em0wIDAiLz48L3N2Zz4=';

const naverBlogIcon =
  'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNDEuNTc0MjE5IDIxMC4yMTA5MzgtODIuOTUzMTI1IDg3LjgyODEyNCA3NS40OTIxODctNDEuNDIxODc0IDM5LjQ0NTMxMyA0MS40MjE4NzQgODIuNDg4MjgxLTg3LjgyODEyNC03NC42NTYyNSA0MC42OTUzMTJ6bTAgMCIvPjxwYXRoIGQ9Im0yNTYgMGMtMTQxLjM2MzI4MSAwLTI1NiAxMTQuNjM2NzE5LTI1NiAyNTZzMTE0LjYzNjcxOSAyNTYgMjU2IDI1NiAyNTYtMTE0LjYzNjcxOSAyNTYtMjU2LTExNC42MzY3MTktMjU2LTI1Ni0yNTZ6bTIgMzkzLjAzNTE1NmMtMTUuODQ3NjU2IDAtMzEuMTQ0NTMxLTIuMjM4MjgxLTQ1LjUzNTE1Ni02LjM4MjgxMmwtNTEuNjI1IDI5LjM0NzY1NnYtNTUuMjEwOTM4Yy0zNC41NzgxMjUtMjYuMzEyNS01Ni42NjAxNTYtNjYuMzg2NzE4LTU2LjY2MDE1Ni0xMTEuMjY5NTMxIDAtNzkuMjY1NjI1IDY4Ljg2NzE4Ny0xNDMuNTE5NTMxIDE1My44MjAzMTItMTQzLjUxOTUzMSA4NC45NTcwMzEgMCAxNTMuODIwMzEyIDY0LjI1MzkwNiAxNTMuODIwMzEyIDE0My41MTk1MzEgMCA3OS4yNTc4MTMtNjguODYzMjgxIDE0My41MTU2MjUtMTUzLjgyMDMxMiAxNDMuNTE1NjI1em0wIDAiLz48L3N2Zz4=';

const naverPostIcon =
  'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNTYgMGMtMTQxLjM2MzI4MSAwLTI1NiAxMTQuNjM2NzE5LTI1NiAyNTZzMTE0LjYzNjcxOSAyNTYgMjU2IDI1NiAyNTYtMTE0LjYzNjcxOSAyNTYtMjU2LTExNC42MzY3MTktMjU2LTI1Ni0yNTZ6bTExNi44ODY3MTkgMTk5LjYwMTU2MmMuMTEzMjgxIDIuNTE5NTMyLjE2Nzk2OSA1LjA1MDc4Mi4xNjc5NjkgNy41OTM3NSAwIDc3LjY0NDUzMi01OS4xMDE1NjMgMTY3LjE3OTY4OC0xNjcuMTgzNTk0IDE2Ny4xODM1OTRoLjAwMzkwNi0uMDAzOTA2Yy0zMy4xODM1OTQgMC02NC4wNjI1LTkuNzI2NTYyLTkwLjA2NjQwNi0yNi4zOTQ1MzEgNC41OTc2NTYuNTQyOTY5IDkuMjc3MzQzLjgxMjUgMTQuMDE1NjI0LjgxMjUgMjcuNTMxMjUgMCA1Mi44NjcxODgtOS4zOTA2MjUgNzIuOTgwNDY5LTI1LjE1MjM0NC0yNS43MjI2NTYtLjQ3NjU2Mi00Ny40MTAxNTYtMTcuNDY0ODQzLTU0Ljg5NDUzMS00MC44MTI1IDMuNTgyMDMxLjY4NzUgNy4yNjU2MjUgMS4wNjI1IDExLjA0Mjk2OSAxLjA2MjUgNS4zNjMyODEgMCAxMC41NTg1OTMtLjcyMjY1NiAxNS40OTYwOTMtMi4wNzAzMTItMjYuODg2NzE4LTUuMzgyODEzLTQ3LjE0MDYyNC0yOS4xNDQ1MzEtNDcuMTQwNjI0LTU3LjU5NzY1NyAwLS4yNjU2MjQgMC0uNTAzOTA2LjAwNzgxMi0uNzUgNy45MTc5NjkgNC40MDIzNDQgMTYuOTcyNjU2IDcuMDUwNzgyIDI2LjYxMzI4MSA3LjM0NzY1Ny0xNS43NzczNDMtMTAuNTI3MzQ0LTI2LjE0ODQzNy0yOC41MjM0MzgtMjYuMTQ4NDM3LTQ4LjkxMDE1NyAwLTEwLjc2NTYyNCAyLjkxMDE1Ni0yMC44NTE1NjIgNy45NTcwMzEtMjkuNTM1MTU2IDI4Ljk3NjU2MyAzNS41NTQ2ODggNzIuMjgxMjUgNTguOTM3NSAxMjEuMTE3MTg3IDYxLjM5NDUzMi0xLjAwNzgxMi00LjMwNDY4OC0xLjUyNzM0My04Ljc4OTA2My0xLjUyNzM0My0xMy4zOTg0MzggMC0zMi40Mzc1IDI2LjMxNjQwNi01OC43NTM5MDYgNTguNzY1NjI1LTU4Ljc1MzkwNiAxNi45MDIzNDQgMCAzMi4xNjc5NjggNy4xNDQ1MzEgNDIuODkwNjI1IDE4LjU2NjQwNiAxMy4zODY3MTktMi42NDA2MjUgMjUuOTU3MDMxLTcuNTMxMjUgMzcuMzEyNS0xNC4yNjE3MTktNC4zOTQ1MzEgMTMuNzE0ODQ0LTEzLjcwNzAzMSAyNS4yMjI2NTctMjUuODM5ODQ0IDMyLjUgMTEuODg2NzE5LTEuNDIxODc1IDIzLjIxNDg0NC00LjU3NDIxOSAzMy43NDIxODctOS4yNTM5MDYtNy44NjMyODEgMTEuNzg1MTU2LTE3LjgzNTkzNyAyMi4xMzY3MTktMjkuMzA4NTkzIDMwLjQyOTY4N3ptMCAwIi8+PC9zdmc+';

export const icons = {
  heart,
  searchIcon,
  arrowTopIcon,
  arrowrightIcon,
  instaIcon,
  facebookIcon,
  youtubeIcon,
  naverBlogIcon,
  naverPostIcon,
};
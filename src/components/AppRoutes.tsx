import routes from 'routes/routes'
import useRouteScrollTop from 'hooks/useRouteScrollTop'
import { Navigate, Route, Routes } from 'react-router-dom'

export default function AppdRoutes() {
  useRouteScrollTop()
  return (
    <Routes>
      {routes.map(({ Component, path, name }) => (
        <Route
          path={path}
          key={`${path}-route`}
          element={<Component title={name} />}
        />
      ))}
      <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
    </Routes>
  )
}
